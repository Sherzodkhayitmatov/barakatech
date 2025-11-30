import React, { useState } from 'react';
import { analyzeTransaction } from '../services/geminiService';
import { TransactionAnalysis } from '../types';
import { Loader2, Sparkles, AlertCircle, Activity, Copy, Check } from 'lucide-react';

const SAMPLE_TRANSACTIONS = [
  "UBER * TRIP 8412 HELP.UBER.COM CA",
  "AMZN Mktp US*H52Z 800-667-0000 WA",
  "Netflix.com 098-123-1111 CA Monthly",
  "SQ *JOE'S COFFEE HOUSE NEW YORK NY"
];

const LiveDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TransactionAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Small artificial delay to show the loading state nicely if API is too fast
      const [analysis] = await Promise.all([
        analyzeTransaction(input),
        new Promise(resolve => setTimeout(resolve, 800))
      ]);
      setResult(analysis);
    } catch (err) {
      setError("Tahlil qilishda xatolik yuz berdi. API kaliti sozlanganligiga ishonch hosil qiling.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(JSON.stringify(result, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">BarakaTech Demosini Sinab Ko'ring</h2>
          <p className="text-slate-600 text-lg">
            Bizning sun'iy intellekt asosidagi API imkoniyatlarini sinab ko'ring. Har qanday xom tranzaksiya matnini kiriting va biz uni qanday tozalab, kategoriyalarga ajratishimizni real vaqtda ko'ring.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Input Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
              1. Xom Ma'lumotni Kiriting
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tranzaksiya matni</label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="masalan: PAYMENT TO TST* BURGER KING 2341..."
                  className="w-full h-32 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-slate-50 resize-none text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Namuna tanlang:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {SAMPLE_TRANSACTIONS.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(t)}
                      className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-colors border border-slate-200"
                    >
                      {t.substring(0, 25)}...
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading || !input}
                className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Jarayonda...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    AI bilan Tahlil Qilish
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl relative overflow-hidden min-h-[400px] flex flex-col">
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2 z-10">
              2. API Natijasi (JSON)
            </h3>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800/20 via-slate-900 to-slate-900 pointer-events-none"></div>

            <div className="flex-1 z-10">
              {error ? (
                 <div className="h-full flex flex-col items-center justify-center text-rose-400 gap-3">
                   <AlertCircle className="w-10 h-10" />
                   <p className="text-center">{error}</p>
                 </div>
              ) : result ? (
                <div className="animate-fade-in space-y-4">
                  {/* Visual Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-primary-300 uppercase">Sotuvchi</p>
                        <h4 className="text-xl font-bold text-white">{result.merchantName}</h4>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded font-medium border border-emerald-500/20">
                        {Math.round(result.confidenceScore)}% Aniqlik
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-200 text-xs rounded-md border border-primary-500/20">
                        {result.category}
                      </span>
                      <span className="px-2 py-1 bg-white/5 text-slate-300 text-xs rounded-md border border-white/10">
                        {result.subCategory}
                      </span>
                      {result.isSubscription && (
                         <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/20">
                           Obuna
                         </span>
                      )}
                    </div>
                  </div>

                  {/* JSON Code Block */}
                  <div className="relative group">
                    <div className="absolute top-2 right-2 flex gap-2">
                        <button
                          onClick={handleCopy}
                          className="p-1.5 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-lg transition-colors backdrop-blur-sm"
                          title="JSON nusxalash"
                        >
                          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 overflow-x-auto border border-white/5">
                      <pre className="text-xs sm:text-sm font-mono text-emerald-400 leading-relaxed">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-3 border-2 border-dashed border-slate-700 rounded-xl">
                  <Activity className="w-12 h-12 opacity-50" />
                  <p>Ma'lumot kutilmoqda...</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveDemo;