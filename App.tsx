
import React, { useState, useMemo } from 'react';
import { FOOD_DATA } from './constants';
import { FoodItem } from './types';
import FoodCard from './components/FoodCard';
import FoodModal from './components/FoodModal';
import KnowledgeGraph from './components/KnowledgeGraph';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'graph'>('grid');

  const categories = ['全部', ...Array.from(new Set(FOOD_DATA.map(f => f.category)))];

  const filteredFood = useMemo(() => {
    return FOOD_DATA.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            food.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '全部' || food.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-green-900/50">B</div>
            <div>
              <h1 className="text-xl font-bold wild-font tracking-wider text-green-500">BEAR GRYLLS</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Survival Food Archives</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              列表
            </button>
            <button 
              onClick={() => setViewMode('graph')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${viewMode === 'graph' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              图谱
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="搜索食物、地域、描述..."
              className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Banner */}
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/bear/1200/400" 
            className="w-full h-full object-cover brightness-50"
            alt="Survivalist Background"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-4xl md:text-6xl font-black mb-4 wild-font text-white uppercase drop-shadow-lg">
              站在食物链顶端的菜单
            </h2>
            <p className="max-w-2xl text-gray-200 text-sm md:text-base">
              “在大自然中，你不需要米其林三星，你只需要活下去的燃料。” —— 这里收录了贝尔·格里尔斯在荒野求生中遭遇的各种极限补给。
            </p>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat 
                      ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFood.map(food => (
                <FoodCard 
                  key={food.id} 
                  item={food} 
                  onClick={setSelectedFood} 
                />
              ))}
            </div>
            {filteredFood.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <p className="text-xl">没有找到相关的荒野食物。</p>
                <button onClick={() => {setSearchTerm(''); setSelectedCategory('全部');}} className="mt-4 text-green-500 hover:underline">重置过滤器</button>
              </div>
            )}
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <KnowledgeGraph />
             <div className="mt-8 bg-gray-800/30 p-6 rounded-xl border border-gray-700">
               <h3 className="text-xl font-bold mb-4 text-white">图谱说明</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 该知识图谱展示了贝尔摄入的各种食物与它们所属的<strong>地域</strong>、<strong>环境</strong>以及<strong>处理方式</strong>之间的复杂联系。
                 你可以通过拖动节点来查看关联性。绿色节点代表食物本体，黄色代表地域，蓝色代表生存环境，粉色代表处理技巧。
               </p>
             </div>
          </div>
        )}
      </main>

      {/* Stats Footer */}
      <footer className="container mx-auto px-4 mt-12 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <div className="flex gap-8">
          <div><span className="text-white font-bold">{FOOD_DATA.length}</span> 总补给项</div>
          <div><span className="text-white font-bold">{new Set(FOOD_DATA.map(f => f.region)).size}</span> 涉及地域</div>
          <div><span className="text-white font-bold">{Math.round(FOOD_DATA.reduce((acc, f) => acc + f.calories, 0))}</span> 总热量潜能</div>
        </div>
        <div>Survival Visualization Interface &copy; 2024</div>
      </footer>

      {/* Modal */}
      <FoodModal 
        item={selectedFood} 
        onClose={() => setSelectedFood(null)} 
      />
    </div>
  );
};

export default App;
