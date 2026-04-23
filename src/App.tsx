/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Image as ImageIcon, 
  Calculator, 
  Lightbulb,
  Menu,
  X,
  Dna,
  History,
  Calendar,
  FileText,
  Layers,
  Eye
} from 'lucide-react';
import Introduction from './components/Introduction';
import FigureViewer from './components/FigureViewer';
import ScoringTool from './components/ScoringTool';
import Interpretation from './components/Interpretation';

type Section = 'intro' | 'figures' | 'scoring' | 'interpretation';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'intro', label: 'عن الاختبار', icon: BookOpen },
    { id: 'figures', label: 'النماذج والأشكال', icon: ImageIcon },
    { id: 'scoring', label: 'أداة التنقيط', icon: Calculator },
    { id: 'interpretation', label: 'التفسير والتحليل', icon: Lightbulb },
  ];

  const getCurrentDate = () => {
    return new Intl.DateTimeFormat('ar-EG', { dateStyle: 'long' }).format(new Date());
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 lg:p-8 flex flex-col" dir="rtl">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-slate-900 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-slate-900 p-1.5 rounded text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
              <Dna size={20} />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">مقياس الشكل المعقد لري</h1>
          </div>
          <p className="text-slate-500 font-medium">Figure Complexe de Rey-Osterrieth • التقييم العصبي المعرفي</p>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm w-full md:w-auto">
          <div className="bg-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2">
            <History size={16} className="text-slate-400" />
            <span className="text-slate-400">إصدار:</span> <span className="font-bold">A. Rey 1959</span>
          </div>
          <div className="bg-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center gap-2">
            <Calendar size={16} className="text-slate-400" />
            <span className="text-slate-400">التاريخ:</span> <span className="font-bold">{getCurrentDate()}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 flex-grow">
        {/* Navigation Sidebar/TopBar as Bento Block */}
        <nav className="lg:w-72 space-y-3 shrink-0">
          <div className="bg-indigo-600 p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(79,70,229,0.3)] text-white mb-6">
            <h3 className="text-lg font-bold mb-2">قائمة التحكم</h3>
            <p className="text-indigo-200 text-xs">تنقل بين مراحل الاختبار وعمليات التقييم</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-200 group relative
                  ${activeSection === item.id 
                    ? 'bg-white border-slate-900 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] font-black z-10' 
                    : 'bg-white/50 border-transparent text-slate-500 hover:bg-white hover:border-slate-200 shadow-sm'}`}
              >
                <item.icon size={20} className={activeSection === item.id ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
                <span className="truncate">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content Area as Bento Grid Container */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <div className="h-full bg-white border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6 lg:p-10 overflow-auto">
                {activeSection === 'intro' && <Introduction />}
                {activeSection === 'figures' && <FigureViewer />}
                {activeSection === 'scoring' && <ScoringTool />}
                {activeSection === 'interpretation' && <Interpretation />}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* System Footer */}
      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 border-t-2 border-slate-200 pt-6">
        <div className="flex gap-6 items-center">
          <span>الحالة: <strong className="text-slate-900">جاهز للاستخدام</strong></span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>نظام التقييم الرقمي v1.0</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-slate-900 bg-white text-slate-900 rounded-xl font-bold shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">تحميل الدليل</button>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-xl font-bold shadow-[2px_2px_0px_0px_rgba(15,23,42,0.3)] hover:bg-slate-800 transition-colors">بدأ اختبار جديد</button>
        </div>
      </footer>
    </div>
  );
}
