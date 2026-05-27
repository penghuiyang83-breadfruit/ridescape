"use client";

import { motion } from "framer-motion";

const posters = [
  {
    title: "RIDE FREE",
    image:
      "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "NIGHT RIDER",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ROAD DIARY",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "COASTAL",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero1.jpg')",
        }}
      />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/45" />

      {/* 顶部渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* 内容 */}
      <div className="relative z-10">
        {/* 顶部导航 */}
        <header className="flex items-center justify-between px-10 py-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />
            <div>
              <div className="text-xs tracking-[0.4em] text-white/70">
                AI MOTORCYCLE
              </div>
              <div className="text-sm tracking-[0.3em] text-white/90">
                POSTER STUDIO
              </div>
            </div>
          </div>

          <nav className="hidden gap-10 text-sm text-white/80 md:flex">
            <a href="#">风格库</a>
            <a href="#">示例作品</a>
            <a href="#">使用说明</a>
          </nav>

          <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm backdrop-blur-md transition hover:bg-white/20">
            开始创作
          </button>
        </header>

        {/* Hero */}
        <section className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* 标签 */}
            <div className="mb-8 inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-2 text-xs tracking-[0.35em] text-white/70 backdrop-blur-md">
              AI MOTORCYCLE POSTER STUDIO
            </div>

            {/* 标题 */}
            <h1 className="leading-none">
              <div className="text-[84px] font-black tracking-tight">
                把你的骑行，
              </div>

              <div className="mt-2 text-[84px] font-black tracking-tight text-white/95">
                变成一部电影。
              </div>
            </h1>

            {/* 副标题 */}
            <div className="mt-8 text-2xl font-light text-white/85">
              电影质感海报 / 赛博朋克 / 公路片 / 动画风格 / 壁纸
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              上传你的摩托车照片，一键生成多种风格的高质量海报与壁纸。
            </p>

            {/* 按钮 */}
            <div className="mt-12 flex items-center gap-6">
              <button className="rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-black transition hover:scale-105">
                ✦ 生成电影海报
              </button>

              <button className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-8 py-5 backdrop-blur-md transition hover:bg-white/20">
                <div className="text-2xl">↑</div>

                <div className="text-left">
                  <div className="text-lg">上传你的照片</div>
                  <div className="text-sm text-white/50">
                    支持 JPG / PNG
                  </div>
                </div>
              </button>
            </div>

            {/* 功能 */}
            <div className="mt-16 flex flex-wrap gap-12 text-white/70">
              <div>
                <div className="text-3xl">⚡</div>
                <div className="mt-3 text-xl">AI 智能生成</div>
                <div className="mt-1 text-sm text-white/50">
                  强大模型，快速出图
                </div>
              </div>

              <div>
                <div className="text-3xl">✦</div>
                <div className="mt-3 text-xl">多种风格</div>
                <div className="mt-1 text-sm text-white/50">
                  多种电影风格任选
                </div>
              </div>

              <div>
                <div className="text-3xl">HD</div>
                <div className="mt-3 text-xl">高清输出</div>
                <div className="mt-1 text-sm text-white/50">
                  高分辨率海报下载
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 示例作品 */}
        <section className="mx-auto max-w-7xl px-10 pb-20">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">示例作品</h2>

              <button className="text-white/60 transition hover:text-white">
                查看全部 →
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {posters.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-black/40"
                >
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <div className="text-4xl font-black tracking-tight">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}