import { useState } from 'react';
import { Rocket, Shield, BarChart3, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Markets', href: '#markets' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10 shadow-[0_0_1px_0_rgba(255,255,255,0.7)_inset,0_1px_20px_-4px_rgba(59,130,246,0.35)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="relative grid place-items-center">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-amber-300 blur-md opacity-60" />
                <span className="relative rounded-xl bg-black/60 p-2 ring-1 ring-white/20">
                  <Rocket className="h-5 w-5 text-white" />
                </span>
              </span>
              <span className="font-semibold text-white tracking-tight">NeonChain</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/80 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">
                <Shield className="h-4 w-4" />
                Get Started
              </a>
            </div>

            <button className="md:hidden rounded-xl p-2 text-white/90 hover:text-white hover:bg-white/10 transition" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-3 space-y-2">
                  {links.map((l) => (
                    <a key={l.label} href={l.href} className="block rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/10">
                      {l.label}
                    </a>
                  ))}
                  <a href="#get-started" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow">
                    <BarChart3 className="h-4 w-4" />
                    Launch App
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
