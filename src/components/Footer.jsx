export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {year} NeonChain. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
