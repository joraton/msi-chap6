'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, BarChart3, Target, Brain, Award, BookOpen } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  iconName: string;
  color: string;
  bgColor: string;
  index: number;
}

const getButtonColor = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'text-blue-600': 'bg-blue-600',
    'text-green-600': 'bg-green-600',
    'text-purple-600': 'bg-purple-600',
    'text-indigo-600': 'bg-indigo-600',
    'text-orange-600': 'bg-orange-600',
    'text-red-600': 'bg-red-600'
  };
  return colorMap[color] || 'bg-blue-600';
};

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'rocket': Rocket,
    'trending-up': TrendingUp,
    'bar-chart-3': BarChart3,
    'target': Target,
    'brain': Brain,
    'award': Award,
    'book-open': BookOpen
  };
  return iconMap[iconName] || Rocket;
};

export default function SectionBlock({
  title,
  description,
  href,
  iconName,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  const Icon = getIcon(iconName);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <div className={`${bgColor} p-3 rounded-full`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href={href}
            className={`${getButtonColor(color)} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 group-hover:scale-105`}
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}