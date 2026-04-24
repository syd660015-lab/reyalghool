import React from 'react';
import { motion } from 'motion/react';
import { Info, Brain, ClipboardList, PenTool } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="space-y-8 text-right font-sans" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-white p-8 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
        >
          <div className="flex items-center gap-3 mb-6 text-slate-900 border-b-2 border-slate-100 pb-4">
            <div className="bg-slate-900 text-white p-2 rounded-lg">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-black">1- تقديم الاختبار:</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg mb-8 font-medium">
            الشكل المعقد لري <span className="text-indigo-600 font-black">"Figure Complexe de Rey"</span> هو اختبار نفسي يستعمل في علم النفس العيادي، المدرسي، والعصبي. يقوم على نقل شكل هندسي معقد بعد تقديمه بصريا، ثم إعادة إنتاجه من الذاكرة. 
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
              <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                <Brain size={20} className="text-indigo-600" /> ماذا يقيس؟
              </h3>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li className="flex items-center gap-2 underline decoration-indigo-200 decoration-2 underline-offset-4">الذاكرة طويلة المدى</li>
                <li className="flex items-center gap-2 underline decoration-indigo-200 decoration-2 underline-offset-4">ذاكرة العمل (قصيرة المدى)</li>
                <li className="flex items-center gap-2 underline decoration-indigo-200 decoration-2 underline-offset-4">الترميز (Encodage)</li>
                <li className="flex items-center gap-2 underline decoration-indigo-200 decoration-2 underline-offset-4">إعادة المعلومات (Restitution)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex-1 bg-white border-2 border-slate-900 p-2 rounded-xl flex items-center justify-center relative group overflow-hidden">
                  <img 
                      src="https://i.ibb.co/nscS0sxy/figure-a.png" 
                      alt="Rey Figure A Preview" 
                      className="max-h-24 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900 text-white text-[8px] px-1.5 py-0.5 rounded uppercase font-black">الشكل أ</div>
              </div>
              <div className="flex-1 bg-white border-2 border-slate-900 p-2 rounded-xl flex items-center justify-center relative group overflow-hidden">
                  <img 
                      src="https://i.ibb.co/0jNpxVMR/figure-b.png" 
                      alt="Rey Figure B Preview" 
                      className="max-h-24 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900 text-white text-[8px] px-1.5 py-0.5 rounded uppercase font-black">الشكل ب</div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-4 bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,0.3)] flex flex-col justify-center"
        >
          <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">نظرة سريعة</div>
          <h3 className="text-2xl font-black mb-6 border-r-4 border-indigo-500 pr-4">العمليات المعرفية المتضمنة</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400">الترميز</span>
              <span className="font-bold text-indigo-400 font-mono">Encodage</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-slate-400">التخزين</span>
              <span className="font-bold text-emerald-400 font-mono">Stockage</span>
            </div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <div className="text-[10px] uppercase font-bold text-indigo-400 mb-1">الفئة المستهدفة</div>
              <p className="text-xs opacity-80 leading-relaxed">من <span className="font-black text-indigo-400">6 سنوات</span> إلى سن الرشد.</p>
          </div>
        </motion.div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
      >
        <div className="flex items-center gap-3 mb-8 text-slate-900 border-b-2 border-slate-100 pb-4">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
            <PenTool size={24} />
          </div>
          <h2 className="text-2xl font-black">كيفية تطبيق الاختبار:</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-100 hidden md:block" />
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-black text-slate-900">المرحلة الأولى: النقل المباشر</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                <span className="font-bold text-indigo-600">الهدف:</span> التعرف على مشاكل الذاكرة البصرية الفضائية قصيرة المدى.
              </p>
              <blockquote className="border-r-4 border-indigo-500 pr-4 italic text-slate-600 text-sm">
                "هذا الرسم ستقوم بنقله على هذه الورقة، ليس من الضروري أن تقوم بنقل دقيق، لكن يجب أن تنتبه إلى التناسب..."
              </blockquote>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-black text-slate-900">المرحلة الثانية: إعادة الإنتاج</h3>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                <span className="font-bold text-emerald-600">الهدف:</span> التعرف على مشاكل الذاكرة البصرية الفضائية طويلة المدى.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-indigo-800 bg-white/50 p-3 rounded-lg border border-indigo-100">
                <span className="bg-indigo-600 text-white px-2 py-1 rounded">بعد 3 دقائق</span>
                <span>تنزع الشكل ويطلب من المفحوص رسمه من الذاكرة</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Introduction;
