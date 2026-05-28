import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Globe, Award } from 'lucide-react';
import profile from '../content/about/profile.json';
import achievements from '../content/achievements/achievements.json';
import { iconMap } from '../content/iconMap';

const details = [
  { icon: GraduationCap, label: 'Освіта', value: profile.education },
  { icon: Briefcase, label: 'Стаж', value: profile.experience },
  { icon: Globe, label: 'Рівень мови', value: profile.language_level },
  { icon: Award, label: 'Категорія', value: 'Вища' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-uk-light/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-uk-navy mb-4">Про мене</h2>
          <div className="w-16 h-1 bg-uk-red rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {details.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-uk-sky/10"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-uk-navy/5 flex items-center justify-center">
                  <item.icon size={24} className="text-uk-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-uk-navy mb-1">{item.label}</h3>
                  <p className="text-uk-steel text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-uk-navy mb-6">Досягнення</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.list.map((item, idx) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Award;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 bg-white rounded-xl shadow-sm border border-uk-sky/10 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-uk-red/5 flex items-center justify-center mb-4">
                    <IconComponent size={22} className="text-uk-red" />
                  </div>
                  <h4 className="font-semibold text-uk-navy mb-2">{item.title}</h4>
                  <p className="text-uk-steel text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
