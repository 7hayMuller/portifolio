"use client";

import Navbar from "@/components/NavBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { anton } from "../fonts";

export default function Blog() {
  const [posts, setPosts] = useState<
    {
      title: string;
      link: string;
      date: string;
      excerpt: string;
      coverImage: string | null;
    }[]
  >([]);

  useEffect(() => {
    fetch("/medium-posts.json")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  // if (posts.length === 0) {
  //   return <Loading />;
  // }

  return (
    <>
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/liquid-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <div>
            {"BLOG".split("").map((l, i) => (
              <span
                key={i}
                className={`
                  opacity-0
                  ${anton.className}
                  text-transparent
                  stroke-white
                  animate-osmo-hero
                  text-white
                  text-[clamp(8rem,20vw,4rem)]
                  md:text-[clamp(3rem,10vw,8rem)]
                  font-semibold
                  tracking-tight
                `}
                style={{ animationDelay: `${i * 800}ms` }}
              >
                {l}
              </span>
            ))}
          </div>

          <div className="text-center">
            <span className="block text-white/80 text-2xl tracking-wide">
              Built with curiosity
            </span>
            <span className="block mt-2 text-white/50 text-[13px] text-sm tracking-wider uppercase">
              Frontend · UX/UI design · Real-world lessons
            </span>
          </div>
        </div>

        {/* 🔥 TRANSIÇÃO AQUI (IMPORTANTE) */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[#2a0e16]" />
      </section>
      <section
        id="blog"
        className="bg-gradient-to-b from-[#2a0e16] via-[#3b1521] to-[#2a0e16] py-32"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.link}
                className="border border-white/10 rounded-lg p-6 bg-black/20 backdrop-blur hover:bg-black/30 transition"
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

                <h2 className="text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h2>

                <p className="text-white/60 mb-4">{post.excerpt}</p>

                <a
                  href={post.link}
                  target="_blank"
                  className="text-white/80 hover:text-white font-medium"
                >
                  Ler no Medium →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
