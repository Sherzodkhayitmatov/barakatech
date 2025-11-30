import React from 'react';
import { Cpu, Database, Layout, Server, Smartphone, BarChart3 } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Muammoni qanday hal qilamiz?</h2>
          <p className="text-slate-600 text-lg">
            Biz xarajatlarni nazorat qila olmaslik muammosini AI asosida to‘liq avtomatlashtirilgan tranzaksiya tahlili tizimi bilan hal qilamiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "AI & ML (NLP)",
              tech: "Scikit-learn, PyTorch",
              desc: "Merchant nomlarini semantik tahlil qilish va Hybrid classification modeli orqali 95–99% aniqlikda kategoriyalash."
            },
            {
              icon: Server,
              title: "Backend",
              tech: "Python (FastAPI), PostgreSQL",
              desc: "Yuqori tezlikdagi API va ma'lumotlar bazasi."
            },
            {
              icon: Layout,
              title: "Frontend & Mobile",
              tech: "React (Web), Flutter",
              desc: "Foydalanuvchilar uchun qulay va chiroyli interfeyslar."
            },
            {
              icon: Database,
              title: "Infrastructure",
              tech: "Docker, Kafka, Redis",
              desc: "Real-time (jonli) ma'lumotlarni qayta ishlash va kesh xotira tizimi."
            },
            {
              icon: BarChart3,
              title: "Data Process",
              tech: "Data Cleansing",
              desc: "Refund, pending va duplicate to‘lovlarni avtomatik tozalash."
            },
            {
              icon: Smartphone,
              title: "Integratsiya",
              tech: "Ochiq Banking API",
              desc: "Banklar bilan to‘liq integratsiya qilish orqali avtomatik ma'lumot almashinuvi."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-primary-200 transition-colors">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-3">{item.tech}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;