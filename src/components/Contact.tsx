import { motion } from "motion/react";
import { Mail, Linkedin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-accent rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Get In Touch</h2>
              <h3 className="text-5xl font-bold mb-6 leading-tight">Let’s Work Together</h3>
              <p className="text-brand-dark/70 text-lg mb-10">
                Looking for a reliable Executive Assistant to support your business? Let’s connect and see how I can help you scale efficiently.
              </p>

              <div className="space-y-6">
                <a href="mailto:karendoria51@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Email Me</p>
                    <p className="font-bold">karendoria51@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/karenjoydoria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">LinkedIn</p>
                    <p className="font-bold">linkedin.com/in/karenjoydoria</p>
                  </div>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-brand-beige border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-beige border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your business and how I can help..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-beige border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold hover:bg-brand-dark/90 transition-all flex items-center justify-center gap-2 group shadow-lg"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
