
import React from 'react';
import { FoodItem } from '../types';

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onClick }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case '低': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case '中': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case '高': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case '极高': return 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div 
      onClick={() => onClick(item)}
      className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all cursor-pointer transform hover:-translate-y-1"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getRiskColor(item.riskLevel)}`}>
            风险: {item.riskLevel}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-400">{item.name}</h4>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{item.region} · {item.category}</span>
          <span className="text-orange-400 font-mono">{item.calories} kcal</span>
        </div>
        <p className="mt-2 text-sm text-gray-300 italic line-clamp-2">
          {item.bearQuote}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
