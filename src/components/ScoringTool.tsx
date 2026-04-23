import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REY_FIGURE_A_UNITS } from '../constants';
import { CheckCircle2, AlertCircle, XCircle, Calculator, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

interface UnitScore {
  id: number;
  accuracy: number; // 0, 1, 2
  placement: boolean; // true = good, false = bad
}

const ScoringTool = () => {
  const [scores, setScores] = useState<Record<number, number>>({});
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const calculateTotal = () => {
    return Object.values(scores).reduce((sum: number, val: number) => sum + val, 0);
  };

  const handleScoreChange = (unitId: number, points: number) => {
    setScores(prev => ({ ...prev, [unitId]: points }));
  };

  const scoringRules = [
    { points: 2, label: 'صحيحة وموضوعة جيداً', color: 'text-green-600', bg: 'bg-green-50' },
    { points: 1, label: 'صحيحة وموضوعة سيئاً أو مشوهة وموضوعة جيداً', color: 'text-amber-600', bg: 'bg-amber-50' },
    { points: 0.5, label: 'مشوهة وموضوعة سيئاً (ولكن يمكن التعرف عليها)', color: 'text-orange-600', bg: 'bg-orange-50' },
    { points: 0, label: 'غائبة أو لا يمكن التعرف عليها', color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="space-y-8" dir="rtl">
      <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-100 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">أداة حساب التنقيط (الشكل أ)</h2>
          <p className="text-gray-500 text-sm">حدد درجة كل وحدة من الوحدات الـ 18</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setExpandedUnit(expandedUnit === -1 ? null : -1)}
            className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-black h-fit"
          >
            {expandedUnit === -1 ? <ChevronUp size={16} /> : <ImageIcon size={16} />}
            {expandedUnit === -1 ? 'إخفاء الشكل' : 'عرض الشكل'}
          </button>
          <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-blue-200 shadow-xl">
            <Calculator size={24} />
            <div>
              <div className="text-xs opacity-80">المجموع الكلي</div>
              <div className="text-3xl font-black">{calculateTotal()} / 36</div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expandedUnit === -1 && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white border-2 border-slate-900 rounded-[2rem] p-6 shadow-2xl mb-8 relative group">
                <img 
                    src="https://api.studio.google.com/build/v1/attachments/2" 
                    alt="Reference Rey Figure" 
                    className="w-full max-h-96 object-contain mix-blend-multiply group-hover:scale-[1.02] transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-slate-900/10 backdrop-blur-md text-slate-900 text-[10px] px-3 py-1.5 rounded-full font-black border border-slate-900/20">الشكل أ - المرجع القياسي</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        {REY_FIGURE_A_UNITS.map((unit) => {
          const currentScore = scores[unit.id] ?? 0;
          return (
            <motion.div 
              key={unit.id}
              className={`bg-white rounded-2xl border transition-all ${expandedUnit === unit.id ? 'border-blue-300 shadow-md' : 'border-gray-100'}`}
            >
              <div 
                className="p-5 flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {unit.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{unit.name}</h3>
                    <p className="text-xs text-gray-500">{unit.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-lg font-bold text-blue-600 min-w-[3rem] text-center">
                    {currentScore} ن
                  </div>
                  {expandedUnit === unit.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {expandedUnit === unit.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-5 pb-6 pt-2 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-gray-50 mt-2"
                >
                  {scoringRules.map((rule) => (
                    <button
                      key={rule.points}
                      onClick={() => handleScoreChange(unit.id, rule.points)}
                      className={`p-3 rounded-xl border-2 transition-all text-sm flex flex-col items-center justify-center gap-2 text-center
                        ${currentScore === rule.points 
                          ? `${rule.bg} border-current ${rule.color}` 
                          : 'border-transparent bg-gray-50 hover:bg-gray-100 text-gray-600'}`}
                    >
                      <span className="text-xl font-black">{rule.points}</span>
                      <span className="text-[10px] leading-tight leading-1">{rule.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-xl font-bold mb-4">قواعد التنقيط المتبعة:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
          <div className="flex gap-3">
            <CheckCircle2 size={18} className="text-green-500 shrink-0" />
            <p><span className="text-white font-bold">نقطتان:</span> الوحدة صحيحة وموضوعة بشكل جيد.</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle size={18} className="text-amber-500 shrink-0" />
            <p><span className="text-white font-bold">نقطة واحدة:</span> الوحدة صحيحة موضوعة سيئاً، أو مشوهة/ناقصة موضوعة بشكل جيد.</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle size={18} className="text-orange-500 shrink-0" />
            <p><span className="text-white font-bold">نصف نقطة:</span> الوحدة مشوهة أو ناقصة وموضوعة بشكل سيئ (لكن يمكن التعرف عليها).</p>
          </div>
          <div className="flex gap-3">
            <XCircle size={18} className="text-red-500 shrink-0" />
            <p><span className="text-white font-bold">صفر:</span> الوحدة غائبة أو غير قابلة للتعرف.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoringTool;
