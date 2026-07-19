import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Download } from 'lucide-react';

const ACADEMIC_EVENTS = [
  { date: '2026-07-13', title: 'Hari Pertama Masuk Sekolah', type: 'info' },
  { date: '2026-08-17', title: 'Hari Kemerdekaan Republik Indonesia', type: 'holiday' },
  { date: '2026-09-28', title: 'Maulid Nabi Muhammad SAW', type: 'holiday' },
  { date: '2026-10-28', title: 'Peringatan Hari Sumpah Pemuda', type: 'info' },
  { date: '2026-12-07', title: 'Penilaian Akhir Semester (PAS) Ganjil', type: 'exam' },
  { date: '2026-12-25', title: 'Hari Raya Natal', type: 'holiday' },
  { date: '2026-12-26', title: 'Cuti Bersama Natal', type: 'holiday' },
  { date: '2027-01-01', title: 'Tahun Baru Masehi 2027', type: 'holiday' },
];

export const Kalender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const dayNames = ['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const getEventForDate = (d: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    return ACADEMIC_EVENTS.find(e => e.date === dateStr);
  };

  const selectedEvent = selectedDate ? ACADEMIC_EVENTS.find(e => e.date === selectedDate) : null;

  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            AKADEMIK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Kalender Akademik
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Jadwal kalender pendidikan, ujian semester, pembagian rapor, dan hari libur nasional.
          </motion.p>
        </div>

        {/* Calendar Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Left: Calendar Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-navy">
                  {monthNames[month]} {year}
                </h3>
                <div className="flex items-center gap-2">
                  <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <span className="bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-full">
                    Semester {month >= 6 || month === 11 ? 'Ganjil' : 'Genap'}
                  </span>
                  <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 sm:gap-4 mb-4 text-center">
                {dayNames.map(day => (
                  <div key={day} className="text-slate-400 font-bold text-[11px] sm:text-sm uppercase tracking-wider pb-2">
                    {day}
                  </div>
                ))}
                
                {Array.from({ length: offset }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square"></div>
                ))}
                
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const evt = getEventForDate(day);
                  const isHoliday = evt?.type === 'holiday';
                  const isExam = evt?.type === 'exam';
                  const isSelected = selectedDate === dateStr;

                  const today = new Date();
                  const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

                  let bgColor = 'bg-slate-50 hover:bg-slate-100 text-slate-700';
                  
                  if (isToday) bgColor = 'bg-slate-300 hover:bg-slate-400 text-slate-900 shadow-sm';

                  if (isHoliday) bgColor = 'bg-[#c81e2b] text-white hover:bg-red-700 shadow-md shadow-red-200';
                  else if (isExam) bgColor = 'bg-amber-500 text-white hover:bg-amber-600 shadow-md shadow-amber-200';
                  else if (evt) bgColor = 'bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-200';

                  if (isSelected && !isHoliday && !isExam && !evt) {
                    bgColor = 'bg-brand-navy text-white';
                  }

                  const highlightClass = isSelected 
                    ? 'ring-2 ring-offset-2 ring-brand-navy shadow-lg scale-105' 
                    : '';

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(dateStr)}
                      className={`aspect-square rounded-xl flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer ${bgColor} ${highlightClass}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Legend & Selected Event */}
            <div className="w-full md:w-80 flex flex-col gap-6">
              
              {/* Event Details Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex-1 flex flex-col min-h-[200px]">
                <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <CalendarIcon size={18} className="text-brand-red" />
                  Keterangan Tanggal
                </h4>
                
                {selectedDate ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 h-full">
                    <div className="text-sm text-slate-500 font-medium mb-1">
                      {new Date(selectedDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    {selectedEvent ? (
                      <div className={`mt-3 p-4 rounded-xl h-full ${selectedEvent.type === 'holiday' ? 'bg-red-100/50 text-[#c81e2b]' : selectedEvent.type === 'exam' ? 'bg-amber-100/50 text-amber-700' : 'bg-blue-100/50 text-blue-700'}`}>
                        <p className="font-bold text-sm sm:text-base">{selectedEvent.title}</p>
                        <p className="text-[11px] mt-2 opacity-80 uppercase tracking-wide font-bold">
                          {selectedEvent.type === 'holiday' ? 'Libur Nasional / Sekolah' : selectedEvent.type === 'exam' ? 'Jadwal Ujian' : 'Agenda Sekolah'}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-3 p-4 rounded-xl bg-slate-200/50 text-slate-500 h-full">
                        <p className="font-semibold text-sm">Tidak ada agenda khusus</p>
                        <p className="text-[12px] mt-1 opacity-80">Kegiatan belajar mengajar berjalan seperti biasa.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-3">
                      <CalendarIcon size={20} className="text-slate-400" />
                    </div>
                    <p className="text-xs sm:text-sm">Pilih tanggal pada kalender untuk melihat keterangan agenda atau hari libur.</p>
                  </div>
                )}
              </div>

              {/* Legends / Downloads */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#c81e2b] mt-1.5 shrink-0 shadow-sm shadow-red-200" />
                  <div>
                    <h5 className="font-bold text-sm text-brand-navy mb-0.5">Hari Libur & Peringatan</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Ditandai dengan warna merah di kalender.</p>
                  </div>
                </div>
                
                <a 
                  href="https://docs.google.com/spreadsheets/d/1M93i883MS7pRQ_ZIw4qpAjjxnC8ev95Q/export?format=pdf&portrait=false&fitw=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-100 rounded-xl p-4 flex items-start gap-3 cursor-pointer hover:border-brand-navy hover:shadow-md transition-all group text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors text-brand-navy mt-0.5">
                    <Download size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-brand-navy mb-0.5">Unduh Dokumen Kalender</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Kalender pendidikan akan otomatis terunduh dalam format PDF.</p>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
