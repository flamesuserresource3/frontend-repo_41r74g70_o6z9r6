import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft overlays for readability (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live on-chain insights
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Crypto that feels futuristic — and stunningly simple
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-700 sm:text-xl">
            A clean, modern gateway to the digital economy. Explore markets, manage assets, and
            experience 3D interactions — all with buttery-smooth animations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-gray-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white"
            >
              See Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
