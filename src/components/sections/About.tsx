import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              {profile.bio}
            </p>
            <div className="flex flex-col gap-4 text-white/60">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Based in {profile.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Open to new opportunities</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
          >
            {/* Using a placeholder gradient since no image is provided in profile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-background" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <span className="text-4xl font-bold tracking-tighter">Profile Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
