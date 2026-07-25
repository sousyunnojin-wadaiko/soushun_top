export type SnsUrls = {
  instagram: string;
  x: string;
};

const GAS_URL = "https://script.google.com/macros/s/AKfycbyiUPMIaF7rPNLrwI7uHtOPpHES79GlpVd5xRsU12gpgHP01171VKLkdrKsFs028zg/exec";

export const DEFAULT_SNS_URLS: SnsUrls = {
  instagram:
    "https://www.instagram.com/p/Da2lGOslFMH/?hl=ja&img_index=1",
  x:
    "https://x.com/sousyunnojin/status/2080848444797878449",
};

/**
 * URLが想定したSNSの投稿URLかを簡単に確認する
 */
function isValidInstagramUrl(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);

    return (
      ["www.instagram.com", "instagram.com"].includes(url.hostname) &&
      (url.pathname.startsWith("/p/") ||
        url.pathname.startsWith("/reel/") ||
        url.pathname.startsWith("/tv/"))
    );
  } catch {
    return false;
  }
}

function isValidXUrl(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);

    return (
      ["x.com", "www.x.com", "twitter.com", "www.twitter.com"].includes(
        url.hostname,
      ) && url.pathname.includes("/status/")
    );
  } catch {
    return false;
  }
}

/**
 * GASからInstagramとXの投稿URLを取得する
 *
 * GASでエラーが発生した場合やURLが不正な場合は、
 * DEFAULT_SNS_URLSを使用する。
 */
export async function getSnsUrls(): Promise<SnsUrls> {
  try {
    console.log("GASからSNS URLを取得中...");
    const response = await fetch(GAS_URL, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`GAS request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (
      typeof data !== "object" ||
      data === null ||
      !("instagram" in data) ||
      !("x" in data)
    ) {
      throw new Error("GASから取得したデータの形式が正しくありません。");
    }

    const result = data as {
      instagram: unknown;
      x: unknown;
    };

    return {
      instagram: isValidInstagramUrl(result.instagram)
        ? result.instagram
        : DEFAULT_SNS_URLS.instagram,

      x: isValidXUrl(result.x)
        ? result.x
        : DEFAULT_SNS_URLS.x,
    };
  } catch (error) {
    console.error("SNS URLの取得に失敗しました。", error);

    return DEFAULT_SNS_URLS;
  }
}