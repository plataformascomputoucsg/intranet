import { ReactNode } from 'react';
import { DownloadItem, DownloadItemRow } from './DownloadItemRow';

export interface DownloadCategory {
  title: string;
  icon: ReactNode;
  items: DownloadItem[];
}

export function DownloadCategorySection({ category }: { category: DownloadCategory }) {
  return (
    <section className="w-full">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a90046]/10">
          <div className="flex h-6 w-6 items-center justify-center text-rose-800">
            {category.icon}
          </div>
        </div>
        <h2 className="font-['Poppins'] text-lg font-bold text-gray-800">{category.title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {category.items.map((item) => (
          <DownloadItemRow key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
