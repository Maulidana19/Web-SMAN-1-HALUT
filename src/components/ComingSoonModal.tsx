import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[24px] p-8 sm:p-10 max-w-sm w-full shadow-2xl text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-50 text-slate-400 hover:text-brand-red hover:bg-red-50 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-5">
              <Clock size={32} />
            </div>
            
            <h3 className="text-2xl font-extrabold text-brand-navy font-display mb-2">
              Segera Hadir
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Fitur ini sedang dalam tahap pengembangan. Nantikan pembaruan selanjutnya!
            </p>
            
            <button 
              onClick={onClose}
              className="w-full bg-brand-navy hover:bg-brand-red text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Mengerti
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
