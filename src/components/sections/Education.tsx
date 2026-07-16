import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Education" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <span className="text-sm font-semibold text-primary mb-2 block">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-white/60 mb-4">{edu.institution}</h4>
                <p className="text-white/70 leading-relaxed">
                  {edu.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
