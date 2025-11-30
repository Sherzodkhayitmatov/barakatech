import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-primary-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium text-primary-100">AI500! Ishtirokchisi</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8">
            BarakaTech bilan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Xarajatlaringiz hisobi yanada aniqroq!
            </span>
          </h1>
          
          <p className="text-xl text-primary-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bizning ilova orqali mablag’laringiz tahlilini oson yuriting va moliyaviy erkinlikka tezda erishing. 
            Tartibsiz tranzaksiyalarni sun'iy intellekt yordamida avtomatik tahlil qiling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Demoni sinab ko'ring
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#roadmap"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/10"
            >
              Yo'l xaritasi
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { icon: Activity, title: "Aniq Hisobotlar", desc: "Xarajatlaringizni grafiklar va foizlar orqali ko'ring." },
            { icon: Zap, title: "AI Tahlil", desc: "Merchant nomlari va kategoriyalarni 95-99% aniqlikda tahlil qilish." },
            { icon: ShieldCheck, title: "100% Nazorat", desc: "Shaxsiy moliyaviy intizom va xavfsizlik." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <item.icon className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-primary-200/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;