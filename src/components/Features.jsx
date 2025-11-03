import { Shield, Zap, BarChart3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Institutional Security',
    desc: 'Multi-sig, MPC wallets, and real-time risk scanning keep assets protected.'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Optimized for speed with a silky-smooth, animation-first experience.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'See trends at a glance with smart, visual market signals.'
  },
  {
    icon: Sparkles,
    title: 'Polished UX',
    desc: 'A clean design language with delightful micro-interactions throughout.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 -top-24 mx-auto h-40 max-w-2xl rounded-full bg-gradient-to-r from-cyan-300/40 via-fuchsia-300/40 to-amber-300/40 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for clarity. Designed to wow.</h2>
          <p className="mt-4 text-gray-600">Everything you need to navigate crypto with confidence — without the clutter.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-xl"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition" aria-hidden>
                <div className="h-full w-full bg-gradient-to-br from-cyan-200 via-fuchsia-200 to-amber-200 blur-2xl" />
              </div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gray-900 p-3 text-white shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
