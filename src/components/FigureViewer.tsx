import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ZoomIn, Info, FileText, Maximize2, X, Eye } from 'lucide-react';

const FigureViewer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const figures = [
    {
      id: 'A',
      title: 'الشكل المعقد (أ) - Rey Figure A',
      label: 'للبالغين والأطفال فوق 8 سنوات',
      src: 'https://ibb.co/nscS0sxy',
      desc: 'النموذج القياسي للتقييم العصبي المعقد.'
    },
    {
      id: 'B',
      title: 'الشكل المبسط (ب) - Rey Figure B',
      label: 'للأطفال من 4 إلى 8 سنوات',
      src: 'https://ibb.co/0jNpxVMR',
      desc: 'نسخة مبسطة مخصصة للأطفال أو الحالات الخاصة.'
    }
  ];

  const sheets = [
    { id: 1, title: 'استمارة التنقيط (أ) - Copie', src: 'https://api.studio.google.com/build/v1/attachments/1' },
    { id: 4, title: 'شبكة تحليل الوحدات', src: 'https://api.studio.google.com/build/v1/attachments/4' },
    { id: 6, title: 'التحليل الكيفي (Qualitatif)', src: 'https://api.studio.google.com/build/v1/attachments/6' },
    { id: 8, title: 'تنقيط الشكل (ب)', src: 'https://api.studio.google.com/build/v1/attachments/8' },
    { id: 10, title: 'التحليل الكيفي (ب)', src: 'https://api.studio.google.com/build/v1/attachments/10' },
  ];

  return (
    <div className="space-y-12" dir="rtl">
      {/* Primary Figures Header */}
      <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4">
        <div className="bg-indigo-600 text-white p-2 rounded-lg">
          <FileText size={24} />
        </div>
        <h2 className="text-2xl font-black text-slate-900">نماذج الاختبار والنماذج المرجعية</h2>
      </div>

      {/* Main Figures Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {figures.map((fig, idx) => (
          <motion.div 
            key={fig.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white border-2 border-slate-900 rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900">{fig.title}</h3>
                <p className="text-xs text-slate-500 font-bold decoration-indigo-500/30 underline underline-offset-4">{fig.label}</p>
              </div>
              <button 
                onClick={() => setSelectedImage(fig.src)}
                className="p-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
              >
                <Maximize2 size={18} />
              </button>
            </div>
            
            <div className="relative aspect-[4/3] bg-slate-50 border-2 border-slate-200 rounded-2xl overflow-hidden flex items-center justify-center p-8 group-hover:bg-white transition-colors cursor-pointer" onClick={() => setSelectedImage(fig.src)}>
              <img 
                src={fig.src} 
                alt={fig.title}
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">{fig.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Reference Sheets Bento Gallery */}
      <div className="space-y-6">
        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            الاستمارات والملاحق الرسمية:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sheets.map((sheet, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedImage(sheet.src)}
            >
              <div className="aspect-[3/4] bg-slate-50 rounded-lg overflow-hidden mb-3 border border-slate-100 flex items-center justify-center relative">
                <img 
                  src={sheet.src} 
                  alt={sheet.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    animate={{ 
                      opacity: 0,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/90 p-2 rounded-full text-indigo-600 shadow-xl group-hover:opacity-100 transition-all duration-300"
                    style={{ opacity: 0 }} // Controlled by group-hover class logic alternatively
                  >
                    <Eye size={16} className="group-hover:animate-pulse" />
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 overflow-hidden">
                <div className="text-[10px] font-black text-slate-900 truncate flex-1">{sheet.title}</div>
                <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <Maximize2 size={12} />
                </div>
              </div>
              
              {/* Subtle accent line that grows on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instructions Card */}
      <div className="bg-slate-900 text-white p-8 rounded-[2rem] border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.3)]">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
                <h4 className="text-xl font-black flex items-center gap-2">
                    <Info className="text-indigo-500" /> تنبيهات الوضعية والأدوات:
                </h4>
                <ul className="space-y-3 text-sm opacity-80 list-disc list-inside">
                    <li>يتم تقديم <span className="text-indigo-400 font-bold">الشكل أ</span> بوضعية أفقية حصراً.</li>
                    <li>يجب تسجيل تسلسل الألوان (5 ألوان) لفهم سيرورة النقل.</li>
                    <li>استخدم <span className="text-emerald-400 font-bold">الشكل ب</span> للأطفال من سن 4 إلى 8 سنوات.</li>
                    <li>يفضل طباعة نماذج الاستمارات الرسمية من المعرض أعلاه لضمان دقة النتائج.</li>
                </ul>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full md:w-64 text-center shrink-0">
                <div className="text-3xl font-black font-mono text-indigo-500 mb-1">HQ</div>
                <div className="text-[10px] uppercase font-bold text-slate-500">دقة العرض الأصلية</div>
            </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 lg:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-indigo-400 transition-colors">
              <X size={48} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FigureViewer;
