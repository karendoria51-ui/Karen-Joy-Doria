import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Available for Remote Work
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
            Helping Busy CEOs Stay <span className="text-brand-blue italic">Organized</span>, Focused, and Ahead
          </h1>
          
          <p className="text-lg text-brand-dark/70 mb-8 max-w-xl leading-relaxed">
            Reliable Executive Assistant supporting startups with admin, operations, and customer experience. I bring structure to chaos so you can focus on scaling.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark/90 transition-all flex items-center gap-2 group shadow-lg"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-white border border-brand-dark/10 px-8 py-4 rounded-full font-medium hover:bg-brand-accent transition-all shadow-sm"
            >
              View My Work
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Improved response time by 30%",
              "Experienced in operations",
              "Trusted startup partner"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-dark/80">
                <CheckCircle2 size={16} className="text-brand-blue" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-brand-blue/20 overflow-hidden relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Professional Executive Assistant"
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent rounded-full -z-0 blur-2xl opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue/30 rounded-full -z-0 blur-3xl opacity-40"></div>
          
          <div className="absolute -right-4 bottom-12 glass-card p-4 rounded-2xl z-20 max-w-[200px]">
            <p className="text-xs font-bold text-brand-blue uppercase mb-1">Efficiency Expert</p>
            <p className="text-sm font-medium leading-tight">"Karen Joy transformed our inbox management overnight."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
