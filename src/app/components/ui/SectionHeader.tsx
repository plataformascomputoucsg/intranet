import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionHeaderProps } from '../../types';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight, link }) => (
  <div className="mb-4 flex items-end justify-between px-2">
    <h2 className="text-2xl font-bold text-gray-800">
      {title} <span className="text-ucsg-secondary">{highlight}</span>
      {/* Pequeña curva decorativa debajo del titulo */}
      <div className="mt-1 h-1 w-12 rounded-full bg-[#9d1e43]"></div>
    </h2>
    <a
      href={link}
      className="text-ucsg-secondary flex items-center text-sm font-semibold hover:underline"
    >
      Ver todas <ChevronRight size={14} />
    </a>
  </div>
);

export default SectionHeader;
