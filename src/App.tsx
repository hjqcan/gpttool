import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { ToolGrid } from './components/ToolGrid';
import { tools } from './data/tools';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredTools = tools.filter(tool => 
    (activeCategory === '全部' || tool.category === activeCategory) &&
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <AnimatePresence>
          <motion.div
            key={searchTerm + activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <ToolGrid tools={filteredTools} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;