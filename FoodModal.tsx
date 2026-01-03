
import React from 'react';
import { FoodItem } from '../types';

interface FoodModalProps {
  item: FoodItem | null;
  onClose: () => void;
}

const FoodModal: React.FC<FoodModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="md:w-1/2 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded uppercase tracking-wider font-bold">
                {item.category}
              </span>
              <span className="text-orange-400 font-mono">{item.calories} Calories</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{item.name}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-1">生存背景</h3>
                <p className="text-gray-200">{item.description}</p>
                <div className="flex gap-4 mt-2 text-xs text-gray-400">
                  <span>📍 地域: {item.region}</span>
                  <span>🌍 环境: {item.environment}</span>
                </div>
              </div>

              <div className="p-4 bg-gray-800 rounded-lg border-l-4 border-red-500">
                <h3 className="text-red-400 font-bold mb-1">⚠️ 食用风险与注意事项</h3>
                <p className="text-sm text-gray-300 mb-2">{item.riskDescription}</p>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                  {item.precautions.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-green-400 uppercase mb-1">贝爷评价</h3>
                <div className="relative p-4 bg-green-900/20 rounded-lg italic text-green-100">
                  <span className="absolute -top-2 left-2 text-4xl text-green-600">"</span>
                  {item.bearQuote}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-blue-400 uppercase mb-1">观众弹幕</h3>
                <div className="p-4 bg-blue-900/20 rounded-lg text-blue-100">
                  {item.audienceReaction}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
