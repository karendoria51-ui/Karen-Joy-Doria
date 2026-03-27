import { motion } from "motion/react";
import { TrendingUp, Settings, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Customer Support Optimization",
      challenge: "High volume of inquiries leading to slow response times and customer frustration.",
      action: "Implemented a streamlined response workflow, created standardized templates, and organized a priority-based ticketing system.",
      result: "Improved response time by 30% and increased customer satisfaction ratings.",
      icon: <TrendingUp className="text-brand-blue" />,
      image: "https://picsum.photos/seed/support/800/600"
    },
    {
      title: "Administrative Workflow Improvement",
      challenge: "Disorganized scheduling and tracking systems causing missed deadlines and operational friction.",
      action: "Implemented structured project management systems and automated recurring scheduling tasks.",
      result: "Increased operational efficiency and achieved 100% on-time project completion.",
      icon: <Settings className="text-brand-blue" />,
      image: "https://picsum.photos/seed/admin/800/600"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Measurable Results & Case Studies</h3>
          </div>
          <p className="text-brand-dark/70 max-w-sm">
            Real-world examples of how I've helped executives and teams optimize their operations.
          </p>
        </div>

        <div className="grid gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                    {study.icon}
                  </div>
                  <h4 className="text-2xl font-bold">{study.title}</h4>
                </div>

                <div className="grid gap-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">The Challenge</p>
                    <p className="text-brand-dark/80">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">The Action</p>
                    <p className="text-brand-dark/80">{study.action}</p>
                  </div>
                  <div className="bg-brand-beige p-6 rounded-2xl border border-brand-blue/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2">The Result</p>
                    <p className="text-lg font-bold text-brand-dark">{study.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
