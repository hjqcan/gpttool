import React from 'react';
import { Tool } from '../types/Tool';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={tool.imageUrl}
            alt={tool.name}
            className="w-12 h-12 rounded-xl object-contain bg-gradient-to-br from-gray-50 to-gray-100 p-2"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{tool.name}</h3>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {tool.category}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{tool.description}</p>
      </div>
    </motion.a>
  );
};