import Navbar from "@/components/NavBar";
import { getMediumPosts } from "@/lib/medium";
import Image from "next/image";

export default async function Blog() {
  const posts = await getMediumPosts();

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#2a235c] via-[#181629] to-[#05020a]">
        <section id="blog" className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-8">Artigos</h1>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.link}
                className="border rounded-lg p-6 hover:shadow transition"
              >
                {post.coverImage && (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={300}
                    height={300}
                    className="rounded mb-4"
                  />
                )}

                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <a
                  href={post.link}
                  target="_blank"
                  className="text-blue-600 font-medium"
                >
                  Ler no Medium →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
