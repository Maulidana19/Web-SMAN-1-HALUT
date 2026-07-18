import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">TESTIMONIAL</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Kisah Inspiratif Siswa & Alumni
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div key={t.id} className="bg-white p-8 shadow-sm text-center border-t-4 border-transparent hover:border-brand-red transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 overflow-hidden mb-6 border-2 border-gray-100 shadow-inner">
                <img
                  src={t.image}
                  alt={`Foto ${t.name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div>
                <h5 className="font-bold text-slate-900 font-display">{t.name}</h5>
                <span className="text-brand-red text-xs font-semibold uppercase">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
