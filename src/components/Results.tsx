import { motion } from 'framer-motion';
import { Trophy, Users, BookOpen, FlaskConical, type LucideIcon } from 'lucide-react';
import resultsData from '../content/results/results.json';

const categoryIcons: Record<string, LucideIcon> = {
  'Успішність': Users,
  'Олімпіади': Trophy,
  'Конкурси': BookOpen,
  'Проєкти': FlaskConical,
};

const categoryColors: Record<string, string> = {
  'Успішність': 'bg-blue-50 text-blue-700',
  'Олімпіади': 'bg-amber-50 text-amber-700',
  'Конкурси': 'bg-emerald-50 text-emerald-700',
  'Проєкти': 'bg-purple-50 text-purple-700',
};

export default function Results() {
  return (
    <section id="results" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-uk-navy mb-4">Результати</h2>
          <div className="w-16 h-1 bg-uk-red rounded-full mb-4" />
          <p className="text-uk-steel text-lg mb-12 max-w-2xl">
            Досягнення моїх учнів — найкраще підтвердження ефективності навчання.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {resultsData.map((item, idx) => {
              const IconComponent = categoryIcons[item.category] || Trophy;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 bg-white rounded-xl shadow-sm border border-uk-sky/10 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-uk-navy/5 flex items-center justify-center">
                      <IconComponent size={24} className="text-uk-red" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-uk-navy">{item.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[item.category] || 'bg-gray-50 text-gray-600'}`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-uk-steel text-sm leading-relaxed">{item.description}</p>
                      <p className="text-xs text-uk-steel/60 mt-2">{item.year}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
