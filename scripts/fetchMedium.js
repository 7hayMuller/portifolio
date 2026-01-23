/* eslint-disable no-console */
const fs = require("fs");
const Parser = require("rss-parser");
const cheerio = require("cheerio");

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0",
    Accept: "application/rss+xml, application/xml;q=0.9,*/*;q=0.8",
  },
});

function extractCoverImage(html) {
  if (!html) return null;
  const $ = cheerio.load(html);
  return $("img").first().attr("src") || null;
}

async function fetchMedium() {
  console.log("🔎 Fetching Medium posts...");

  const feed = await parser.parseURL("https://medium.com/feed/@thaynamuller88");

  const posts = feed.items
    .filter((post) => post?.categories?.includes("javascript"))
    .map((post) => ({
      title: post.title || "",
      link: post.link || "",
      date: post.pubDate || "",
      excerpt: post.contentSnippet || "",
      coverImage: extractCoverImage(post["content:encoded"]),
    }));

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  fs.writeFileSync(
    "./public/medium-posts.json",
    JSON.stringify(posts, null, 2),
  );

  console.log(`✅ Saved ${posts.length} posts to public/medium-posts.json`);
}

fetchMedium().catch((err) => {
  console.error("❌ Failed to fetch Medium posts:", err);
  process.exit(1);
});
