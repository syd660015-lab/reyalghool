import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REY_FIGURE_A_UNITS, REY_FIGURE_B_UNITS } from '../constants';
import { CheckCircle2, AlertCircle, XCircle, Calculator, ChevronDown, ChevronUp, Image as ImageIcon, Layers, Download, Clock } from 'lucide-react';

const ScoringTool = () => {
  const [activeFigure, setActiveFigure] = useState<'A' | 'B'>('A');
  const [scores, setScores] = useState<Record<string, number>>({});
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);
  const [timeTaken, setTimeTaken] = useState<string>('');

  const units = activeFigure === 'A' ? REY_FIGURE_A_UNITS : REY_FIGURE_B_UNITS;
  const maxScore = activeFigure === 'A' ? 36 : 22; // Figure B is 11 units * 2 points = 22
  const figureImage = activeFigure === 'A' ? 'https://i.ibb.co/nscS0sxy/figure-a.png' : 'https://i.ibb.co/0jNpxVMR/figure-b.png';

  const calculateTotal = () => {
    return Object.entries(scores)
      .filter(([key]) => key.startsWith(activeFigure))
      .reduce((sum: number, [, val]) => sum + (val as number), 0);
  };

  const handleScoreChange = (unitId: number, points: number) => {
    setScores(prev => ({ ...prev, [`${activeFigure}-${unitId}`]: points }));
  };

  const handleFigureToggle = (fig: 'A' | 'B') => {
    setActiveFigure(fig);
    setExpandedUnit(null);
  };

  const getScoreForUnit = (unitId: number) => {
    return scores[`${activeFigure}-${unitId}`] ?? 0;
  };

  const exportToCSV = () => {
    const total = calculateTotal();
    const headers = ['Unit ID', 'Unit Name', 'Score'];
    const rows = units.map(u => [u.id, u.name, getScoreForUnit(u.id)]);
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += `Figure,Rey Figure ${activeFigure}\n`;
    csvContent += `Time Taken,${timeTaken}\n`;
    csvContent += `Total Score,${total} / ${maxScore}\n\n`;
    csvContent += headers.join(",") + "\n";
    rows.forEach(row => {
      csvContent += row.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `rey_figure_${activeFigure}_scores.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scoringRules = [
    { points: 2, label: 'صحيحة وموضوعة جيداً', color: 'text-green-600', bg: 'bg-green-50' },
    { points: 1, label: 'صحيحة وموضوعة سيئاً أو مشوهة وموضوعة جيداً', color: 'text-amber-600', bg: 'bg-amber-50' },
    { points: 0.5, label: 'مشوهة وموضوعة سيئاً (ولكن يمكن التعرف عليها)', color: 'text-orange-600', bg: 'bg-orange-50' },
    { points: 0, label: 'غائبة أو لا يمكن التعرف عليها', color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="space-y-8" dir="rtl">
      <div className="sticky top-4 z-40 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full md:w-auto">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl font-bold text-gray-800">أداة حساب التنقيط</h2>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => handleFigureToggle('A')}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${activeFigure === 'A' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
              >الشكل أ</button>
              <button 
                onClick={() => handleFigureToggle('B')}
                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${activeFigure === 'B' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
              >الشكل ب</button>
            </div>
          </div>
          <p className="text-gray-500 text-sm">حدد درجة كل وحدة من الوحدات الـ {units.length}</p>
          
          <div className="mt-4 flex items-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200">
            <Clock size={16} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="وقت التنفيذ (مثلاً 05:00)" 
              value={timeTaken}
              onChange={(e) => setTimeTaken(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-700 outline-none w-32"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <button 
            onClick={exportToCSV}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors flex items-center gap-2 text-xs font-black h-fit border border-indigo-200"
            title="تصدير النتائج كـ CSV"
          >
            <Download size={16} />
            تصدير
          </button>
          
          <button 
            onClick={() => setExpandedUnit(expandedUnit === -1 ? null : -1)}
            className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-black h-fit"
          >
            {expandedUnit === -1 ? <ChevronUp size={16} /> : <ImageIcon size={16} />}
            {expandedUnit === -1 ? 'إخفاء المرجع' : 'عرض المرجع'}
          </button>
          
          <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-blue-200 shadow-xl">
            <Calculator size={24} />
            <div>
              <div className="text-xs opacity-80">المجموع الكلي</div>
              <div className="text-3xl font-black">{calculateTotal()} / {maxScore}</div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {expandedUnit === -1 && (
          <motion.div 
            key={`${activeFigure}-ref`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white border-2 border-slate-900 rounded-[2rem] p-6 shadow-2xl mb-8 relative group">
                <img 
                    src={figureImage} 
                    alt={`Reference Rey Figure ${activeFigure}`} 
                    className="w-full max-h-96 object-contain mix-blend-multiply group-hover:scale-[1.01] transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-slate-900/10 backdrop-blur-md text-slate-900 text-[10px] px-3 py-1.5 rounded-full font-black border border-slate-900/20">
                  الشكل {activeFigure} - المرجع القياسي
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {units.map((unit) => {
            const currentScore = getScoreForUnit(unit.id);
            return (
              <motion.div 
                layout
                key={`${activeFigure}-${unit.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`bg-white rounded-2xl border transition-all ${expandedUnit === unit.id ? 'border-indigo-300 shadow-md ring-4 ring-indigo-50' : 'border-gray-100 hover:border-indigo-100'}`}
              >
                <div 
                  className="p-5 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${currentScore > 0 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {unit.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{unit.name}</h3>
                      <p className="text-xs text-gray-500">{unit.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className={`text-lg font-black min-w-[3.5rem] text-center px-3 py-1 rounded-lg ${currentScore > 0 ? 'bg-indigo-50 text-indigo-600' : 'text-gray-300'}`}>
                      {currentScore} ن
                    </div>
                    {expandedUnit === unit.id ? <ChevronUp size={20} className="text-indigo-400" /> : <ChevronDown size={20} className="text-gray-300" />}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedUnit === unit.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-2 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-gray-50 mt-2">
                        {scoringRules.map((rule) => (
                          <button
                            key={rule.points}
                            onClick={() => handleScoreChange(unit.id, rule.points)}
                            className={`p-3 rounded-xl border-2 transition-all text-sm flex flex-col items-center justify-center gap-2 text-center
                              ${currentScore === rule.points 
                                ? `${rule.bg} border-current ${rule.color} shadow-sm` 
                                : 'border-transparent bg-gray-50 hover:bg-gray-100 text-gray-600'}`}
                          >
                            <span className="text-xl font-black">{rule.points}</span>
                            <span className="text-[10px] font-bold leading-tight line-clamp-2">{rule.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-indigo-600">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <Layers size={24} className="text-indigo-400" />
          معايير التنقيط الموحدة:
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl">
            <CheckCircle2 size={24} className="text-green-500 shrink-0" />
            <p><span className="text-white font-bold block mb-1">2 نقطة:</span> الوحدة صحيحة شكلاً وموضوعة بشكل جيد بالنسبة للهيكل العام.</p>
          </div>
          <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl">
            <AlertCircle size={24} className="text-amber-500 shrink-0" />
            <p><span className="text-white font-bold block mb-1">1 نقطة:</span> الوحدة صحيحة شكلاً وموضوعة سيئاً، أو مشوهة ولكنها موضوعة جيداً.</p>
          </div>
          <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl">
            <AlertCircle size={24} className="text-orange-500 shrink-0" />
            <p><span className="text-white font-bold block mb-1">0.5 نقطة:</span> الوحدة مشوهة أو ناقصة وموضوعة بشكل سيئ (لكن لا يزال يمكن تمييزها).</p>
          </div>
          <div className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl">
            <XCircle size={24} className="text-red-500 shrink-0" />
            <p><span className="text-white font-bold block mb-1">0 نقطة:</span> الوحدة محذوفة تماماً أو مشوهة لدرجة عدم إمكانية التعرف عليها.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoringTool;
