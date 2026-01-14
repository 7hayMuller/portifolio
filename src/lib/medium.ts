import Parser from "rss-parser";
import { load } from "cheerio";

const parser = new Parser();

function extractCoverImage(html?: string) {
  if (!html) return null;
  const $ = load(html);
  return $("img").first().attr("src") ?? null;
}

export async function getMediumPosts() {
  const feed = await parser.parseURL("https://medium.com/feed/@thaynamuller88");

  return feed.items
    .filter((post) => post?.categories?.includes("javascript"))
    .map((post) => ({
      title: post.title ?? "",
      link: post.link ?? "",
      date: post.pubDate ?? "",
      excerpt: post.contentSnippet ?? "",
      coverImage: extractCoverImage(post["content:encoded"]),
    }));
}
