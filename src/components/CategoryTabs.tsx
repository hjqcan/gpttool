import React from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories = ['全部', 'AI对话', 'AI绘画', 'AI写作', 'AI音乐', 'AI视频'];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-200
            ${
              activeCategory === category
                ? 'bg-white/20 shadow-lg backdrop-blur-sm'
                : 'bg-white/10 hover:bg-white/15'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};
