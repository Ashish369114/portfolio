import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Work Experience" />
        
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 mb-12">
                <div className="md:text-right mb-4 md:mb-0 pt-1">
                  <span className="text-sm font-semibold text-primary">{exp.period}</span>
                </div>
                
                <div className="md:col-span-3 relative pb-12 border-l border-white/10 pl-8 md:border-l-0 md:pl-0 md:border-l-none">
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-[-33px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  
                  {/* For desktop to show line */}
                  <div className="hidden md:block absolute left-[-29px] top-4 bottom-[-16px] w-[1px] bg-white/10" />
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-white/60 mb-4">{exp.company}</h4>
                  <p className="text-white/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
