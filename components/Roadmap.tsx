import React from 'react';
import { RoadmapItem, RoadmapStatus } from '../types';
import { CheckCircle2, Circle, Clock, Database, Bot, Smartphone } from 'lucide-react';

const ROADMAP: RoadmapItem[] = [
  {
    phase: "1-2 oy",
    title: "Ma’lumot yig‘ish (Data Collection)",
    description: "Stat.uz va orginfo.uz dan MCHJ/YaTT ma'lumotlarini yig'ish. Mahalliy brendlar uchun 'Oltin Dataset' yaratish.",
    status: RoadmapStatus.IN_PROGRESS,
    date: "Hozirgi bosqich"
  },
  {
    phase: "2-3 oy",
    title: "Gibrid Model (ML Training)",
    description: "Yig'ilgan ma'lumotlar asosida modelni o'qitish. Aniq moslik va mantiqiy taxmin algoritmlarini birlashtirish.",
    status: RoadmapStatus.PLANNED,
    date: "Tez orada"
  },
  {
    phase: "3-oy",
    title: "Telegram Bot MVP",
    description: "Modelni real sharoitda sinash uchun bot ishga tushirish. User Feedback Loop orqali aniqlikni oshirish.",
    status: RoadmapStatus.PLANNED,
    date: "Rejalashtirilgan"
  },
  {
    phase: "5-6 oy",
    title: "Ilova integratsiyasi",
    description: "To‘liq ishlaydigan mobil ilova va banklar uchun API taqdim etish.",
    status: RoadmapStatus.PLANNED,
    date: "Rejalashtirilgan"
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Yo‘l xaritasi & Bosqich</h2>
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full font-semibold border border-primary-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Hozirgi bosqich: G‘oya (Idea Stage)
            </div>
            <p className="mt-4 text-slate-600">Biz ayni damda ma’lumotlar bazasini shakllantirish va ML arxitekturasini loyihalash bosqichidamiz.</p>
          </div>

          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-slate-200"></div>

            {ROADMAP.map((item, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Icon */}
                <div className="relative z-10 shrink-0 w-16 flex justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                    item.status === RoadmapStatus.IN_PROGRESS ? 'bg-emerald-100 text-emerald-600' :
                    'bg-slate-100 text-slate-400'
                  }`}>
                    {item.status === RoadmapStatus.COMPLETED ? <CheckCircle2 className="w-5 h-5" /> :
                     item.status === RoadmapStatus.IN_PROGRESS ? <Database className="w-5 h-5 animate-pulse" /> :
                     index === 2 ? <Bot className="w-5 h-5" /> :
                     index === 3 ? <Smartphone className="w-5 h-5" /> :
                     <Circle className="w-5 h-5" />}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 rounded-2xl border transition-shadow ${item.status === RoadmapStatus.IN_PROGRESS ? 'bg-emerald-50 border-emerald-100 shadow-sm' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-semibold tracking-wider uppercase ${item.status === RoadmapStatus.IN_PROGRESS ? 'text-emerald-600' : 'text-primary-600'}`}>
                      {item.phase}
                    </span>
                    <span className="text-sm text-slate-400 font-medium bg-white px-2 py-1 rounded border border-slate-200">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;