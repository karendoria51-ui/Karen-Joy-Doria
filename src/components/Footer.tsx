export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-brand-dark/5 bg-brand-beige">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xl font-semibold tracking-tight mb-2">
            Karen Joy Doria<span className="text-brand-blue">.</span>
          </p>
          <p className="text-xs text-brand-dark/50">
            © {new Date().getFullYear()} Karen Joy Doria. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-brand-dark/60">
          <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
          <a href="#services" className="hover:text-brand-blue transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-dark/5 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Available for hire</span>
        </div>
      </div>
    </footer>
  );
}
