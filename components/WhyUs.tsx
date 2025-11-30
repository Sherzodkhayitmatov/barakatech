import React from 'react';
import { Award, Brain, RefreshCw, Zap } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="whyus" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Nega aynan bizning jamoa?</h2>
            <p className="text-slate-400 text-lg">
              Biz shunchaki hakatonda qatnashib pul yutish uchun emas, balki haqiqiy muammoga yechim topish uchun birlashdik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Brain className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Texnik ko’nikmalar</h3>
              <p className="text-slate-300 leading-relaxed">
                Jamoamiz Sun'iy intellekt, ma'lumot tahlili va dizayn sohasida amaliy tajribaga ega yoshlardan tuzilgan. Har bir loyiha biz uchun yangi tajriba.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Award className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Muammoni tushunish</h3>
              <p className="text-slate-300 leading-relaxed">
                Biz keltirilgan muammoning tub ildizini tushunamiz va bor bilimlarimizni ishga solib, real yechim taklif qilamiz.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <RefreshCw className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Moslashuvchanlik</h3>
              <p className="text-slate-300 leading-relaxed">
                Yangi sinovlar va xatolardan qo'rqmaymiz. Doimiy o'rganish va yangi texnologiyalarni qo'llash orqali yechimni takomillashtiramiz.
              </p>
            </div>

             <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tajriba</h3>
              <p className="text-slate-300 leading-relaxed">
                Biz bu muammoni ham oddiy foydalanuvchi sifatida, ham ma'lumotlar tahlilchisi sifatida his qilamiz. Ma'lumotlarni vizualizatsiya qilish bizning kuchli tomonimiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;