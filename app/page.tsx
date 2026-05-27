"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    setLoading(true);
    setImage("");

    const res = await fetch("/api/generate", {
      method: "POST",
    });

    const data = await res.json();

    if (data.image) {
      setImage(data.image);
    } else {
      alert("生成失败，请检查 API Key 或终端报错");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
          AI Motorcycle Poster Studio
        </div>

        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          把你的摩托车照片
          <br />
          变成电影。
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          上传你的骑行照片，一键生成电影感、动画感、公路片风格的机车海报与壁纸。
        </p>

        <button
          onClick={generateImage}
          disabled={loading}
          className="mt-10 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black"
        >
          {loading ? "正在生成..." : "生成示例海报"}
        </button>

        {image && (
          <div className="mt-10">
            <img
              src={image}
              alt="AI generated motorcycle poster"
              className="max-w-xl rounded-3xl border border-white/20"
            />
          </div>
        )}
      </section>
    </main>
  );
}