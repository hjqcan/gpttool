import React from 'react';
import { Tool } from '../types/Tool';
import { ToolCard } from './ToolCard';
import { motion } from 'framer-motion';

interface CategorySectionProps {
  category: string;
  tools: Tool[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, tools }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};