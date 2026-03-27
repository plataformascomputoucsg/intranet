'use client';

import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import { Home } from 'lucide-react';

export default function BreadcrumbsNav({ items }: { items?: { label: string; href?: string }[] }) {
  return (
    <div className="flex w-full items-start justify-start">
      <Breadcrumbs
        // separator=">"
        itemClasses={{
          separator: 'px-2 text-ucsg-primary',
        }}
      >
        <BreadcrumbItem href="/">
          <div className="text-ucsg-primary flex items-center gap-1 font-['Poppins']">
            <Home className="h-4 w-4" />
            <span>Inicio</span>
          </div>
        </BreadcrumbItem>
        {items?.map((item, index) => (
          <BreadcrumbItem key={`${item.label}-${index}`} href={item.href}>
            <span className="font-['Poppins'] text-black">{item.label}</span>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
