import React from 'react';
import { motion } from 'motion/react';
import { OSTERRIETH_TYPES, QUALITATIVE_FACTORS } from '../constants';
import { LayoutGrid, AlertTriangle, CheckSquare, Search, ClipboardCheck, Settings, Eye } from 'lucide-react';

const Interpretation = () => {
  return (
    <div className="space-y-12" dir="rtl">
      {/* Osterrieth Types Grid */}
      <section className="text-right">
        <div className="flex justify-between items-center mb-8 border-b-2 border-slate-100 pb-4">
            <div className="flex items-center gap-3 text-slate-900">
                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                    <LayoutGrid size={24} />
                </div>
                <h2 className="text-2xl font-black">تصنيفات استرايت (Osterrieth)</h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500">
                <Settings size={12} />
                <span>7 أنماط تركيبية</span>
            </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {OSTERRIETH_TYPES.map((type, idx) => (
            <motion.div 
              key={type.type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-5 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 transition-all flex flex-col group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-black font-mono shrink-0 group-hover:bg-indigo-600 transition-colors">
                  {type.type}
                </div>
                <h3 className="font-black text-sm text-slate-900 leading-tight pt-1">{type.name}</h3>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium italic opacity-80 mt-auto">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Qualitative Analysis Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900 border-b-2 border-slate-100 pb-4">
            <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <ClipboardCheck size={24} />
            </div>
            <h2 className="text-2xl font-black">عناصر التحليل الكيفي (Qualitative)</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITATIVE_FACTORS.map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-emerald-500 transition-colors">
                    <h4 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-3 bg-emerald-500 rounded-full" />
                        {category.category}
                    </h4>
                    <ul className="space-y-3">
                        {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium group">
                                <div className="w-1 h-1 bg-slate-200 rounded-full group-hover:bg-emerald-500 transition-colors" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Neuro-Cognitive Analysis Block */}
      <section className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(15,23,42,0.3)] relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-xs font-black mb-6 border border-indigo-500/30">
                    <Eye size={16} />
                    <span>الرؤية العصبية المعرفية</span>
                </div>
                <h3 className="text-3xl font-black mb-6">تفسير التوظيف المعرفي</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h5 className="font-black text-indigo-400 mb-3 underline decoration-indigo-500/30">الإدراك البصري الفضائي</h5>
                        <p className="text-xs leading-relaxed opacity-70">يظهر من خلال ترتيب نقل العناصر. البدء بالمحيط (الدرع) يعكس إدراكاً كلياً سليماً، بينما البدء بالتفاصيل المتفرقة قد يشير إلى صعوبات في التخطيط أو الربط المركزي.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h5 className="font-black text-emerald-400 mb-3 underline decoration-emerald-500/30">الذاكرة قصيرة وطويلة المدى</h5>
                        <p className="text-xs leading-relaxed opacity-70">المقارنة بين النقل والذاكرة تتيح التمييز بين "عجز التسجيل" و "عجز الاسترجاع". الحذف المتكرر في الذاكرة يشير إلى هشاشة الأثر الذاكراتي.</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full lg:w-80 flex flex-col gap-4 shrink-0">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                    <div className="text-[10px] text-slate-400 font-bold mb-2">مستوى التعبئة المعرفية</div>
                    <div className="text-4xl font-black font-mono text-white">75%</div>
                    <div className="mt-4 bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full w-3/4" />
                    </div>
                </div>
                <div className="bg-indigo-600 p-6 rounded-2xl text-center shadow-lg">
                    <AlertTriangle size={32} className="mx-auto mb-3 text-white" />
                    <p className="text-[10px] font-bold leading-tight opacity-80">تحذير: لا يغني التحليل الآلي عن التفسير العيادي المعمق للمختص.</p>
                </div>
            </div>
        </div>
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />
      </section>
    </div>
  );
};

export default Interpretation;
