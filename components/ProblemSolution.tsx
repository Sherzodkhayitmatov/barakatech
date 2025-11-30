import React from 'react';
import { XCircle, CheckCircle, ArrowRight, Wallet } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-semibold text-sm">
              Muammo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Tranzaksiyalar tarixi tartibsiz va tushunarsiz.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O‘zbekiston fuqarolari bank kartalaridan ko‘plab tranzaksiyalar amalga oshiradi, ammo tranzaksiya tarixi (SMS yoki ilovalar) tushunarsiz kodlar va qisqartmalar bilan to‘la.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-4">Mavjud qiyinchiliklar:</h4>
              <ul className="space-y-3">
                {[
                  "Tartibsiz, kodlangan SMS xabarlar",
                  "Oylik maosh qayerga ketayotganini aniq ko'rib bo'lmaydi",
                  "Moliyaviy reja tuza olmaslik",
                  "Ortiqcha xarajatlarni nazorat qila olmaslik"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
             {/* Connector line for large screens */}
             <div className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 z-10">
                <div className="bg-primary-50 p-2 rounded-full">
                    <ArrowRight className="w-6 h-6 text-primary-600" />
                </div>
             </div>

            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
               {/* Decorative circles */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-sm">
                  Yechim — BarakaTech
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Baraka bilan Baraka Toping!
                </h2>
                <p className="text-primary-100 leading-relaxed">
                  Endi qog’oz va kalkulyatorga hojat yo’q. BarakaTech sizning xarajatlaringizni grafiklar va foizlar orqali aniq hisobotlarda ko’rsatadi.
                </p>

                <div className="space-y-4">
                  {[
                    "Shaxsiy moliyaviy intizom yaxshilanadi",
                    "Karta orqali to’lovga talab oshadi",
                    "Yashirin iqtisodiyot ulushi kamayadi",
                    "To'liq avtomatlashtirilgan tahlil"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;