import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">About Me</h2>
          <h3 className="text-4xl font-bold mb-6 leading-tight">
            A proactive problem-solver dedicated to your success.
          </h3>
          <div className="space-y-4 text-brand-dark/80 leading-relaxed">
            <p>
              With extensive experience as an Executive Assistant and Operations Supervisor, I've mastered the art of staying calm under pressure while keeping complex systems running smoothly.
            </p>
            <p>
              I don't just execute tasks; I anticipate needs. My strength lies in clear communication, meticulous organization, and a relentless focus on efficiency. I position myself as a trusted right-hand partner, allowing CEOs to step back from the weeds and focus on the big picture.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-4">Why Work With Me</h4>
              <ul className="space-y-3">
                {[
                  "Proactive & detail-oriented",
                  "Strong communication",
                  "Reliable & trustworthy",
                  "Results-driven"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-beige p-6 rounded-2xl">
              <p className="text-3xl font-bold text-brand-blue mb-1">5+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/workspace/800/1000" 
              alt="Organized Workspace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
            <p className="text-lg font-medium leading-tight">
              "My goal is to give you back 10+ hours of your week."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
