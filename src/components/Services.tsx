import { motion } from "motion/react";
import { 
  Calendar, 
  Mail, 
  BarChart3, 
  Users, 
  Palette, 
  MessageSquare,
  Layout,
  Clock
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Executive Support",
      icon: <Calendar className="text-brand-blue" />,
      items: ["Email & calendar management", "Inbox organization", "Scheduling & coordination"]
    },
    {
      title: "Operations & Admin",
      icon: <BarChart3 className="text-brand-blue" />,
      items: ["Data tracking & reporting", "Payroll/admin support", "Workflow organization"]
    },
    {
      title: "Customer Support",
      icon: <MessageSquare className="text-brand-blue" />,
      items: ["Handling inquiries", "Retention & billing support", "Professional communication"]
    },
    {
      title: "Creative Support",
      icon: <Palette className="text-brand-blue" />,
      items: ["Social media assistance", "Canva design (invitations, posts)", "Basic content creation"]
    }
  ];

  const tools = ["Google Workspace", "Microsoft Excel", "Canva", "Slack", "Asana", "Notion"];

  return (
    <section id="services" className="section-padding bg-brand-beige/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Services & Skills</h2>
          <h3 className="text-4xl font-bold mb-6">Comprehensive Support for Growing Startups</h3>
          <p className="text-brand-dark/70">
            I offer a wide range of services designed to streamline your operations and enhance your professional presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm text-brand-dark/70 flex items-start gap-2">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-brand-blue shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-dark text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h4 className="text-2xl font-bold mb-4">Master of the Modern Toolkit</h4>
            <p className="text-white/70 mb-8">
              I'm proficient in the tools that power remote teams and efficient workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-brand-blue" />
              </div>
              <p className="text-3xl font-bold mb-1">30%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Response Time Improvement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layout className="text-brand-blue" />
              </div>
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Reliability Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
