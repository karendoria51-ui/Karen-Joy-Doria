import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow Startups",
      content: "Karen is incredibly organized, proactive, and always one step ahead. She made a huge difference in how we manage daily operations and gave me my time back.",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Michael Chen",
      role: "Founder, Zenith Operations",
      content: "A true partner. Karen doesn't just wait for instructions; she identifies bottlenecks and fixes them before they become problems. Highly recommended.",
      image: "https://picsum.photos/seed/michael/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Director, Creative Pulse",
      content: "Dependable and sharp. Her ability to handle customer inquiries with such professionalism while managing my chaotic calendar is truly impressive.",
      image: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-brand-beige/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-6">What My Partners Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-blue/10" size={48} />
              <p className="text-brand-dark/80 italic mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-brand-dark/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
