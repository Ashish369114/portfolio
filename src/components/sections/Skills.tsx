import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Skills & Technologies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(s => s.category === category)
                    .map(skill => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded-md text-sm text-white/80 border border-white/10"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
