import { Download, ExternalLink } from 'lucide-react';

export interface DownloadItem {
  title: string;
  href: string;
  note?: string;
  isNew?: boolean;
  external?: boolean;
}

const EXTENSION_STYLES: Record<string, string> = {
  PDF: 'bg-red-100 text-red-700',
  XLS: 'bg-emerald-100 text-emerald-700',
  XLSX: 'bg-emerald-100 text-emerald-700',
  DOC: 'bg-blue-100 text-blue-700',
  DOCX: 'bg-blue-100 text-blue-700',
  ZIP: 'bg-amber-100 text-amber-700',
  EXE: 'bg-violet-100 text-violet-700',
};

function getExtension(href: string): string | null {
  const match = href.split('?')[0].match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toUpperCase() : null;
}

export function DownloadItemRow({ item }: { item: DownloadItem }) {
  const extension = item.external ? null : getExtension(item.href);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-zinc-500/20 bg-white p-4 transition-all hover:border-[#a90046]/40 hover:shadow-md"
    >
      <div
        className={`flex h-10 w-14 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
          extension
            ? (EXTENSION_STYLES[extension] ?? 'bg-zinc-100 text-zinc-600')
            : 'bg-[#a90046]/10 text-rose-800'
        }`}
      >
        {extension ?? <ExternalLink className="h-4 w-4" />}
      </div>

      <div className="flex min-w-0 flex-col font-['Poppins']">
        <span className="text-sm leading-tight font-semibold text-gray-800">
          {item.title}
          {item.isNew && (
            <span className="ml-2 rounded-full bg-[#a90046]/10 px-2 py-0.5 text-[10px] font-bold text-rose-800">
              NUEVO
            </span>
          )}
        </span>
        {item.note && <span className="mt-0.5 text-xs text-zinc-500">{item.note}</span>}
      </div>

      <div className="ml-auto shrink-0 text-zinc-400 transition-colors group-hover:text-rose-800">
        {item.external ? <ExternalLink className="h-5 w-5" /> : <Download className="h-5 w-5" />}
      </div>
    </a>
  );
}
