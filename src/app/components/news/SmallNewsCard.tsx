import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComunicacionEspecifica } from '@/app/types/comunicaciones'
import { generateSlug, formatDate } from '@/app/lib/utils'

interface SmallNewsCardProps {
  news: ComunicacionEspecifica
}

const SmallNewsCard: React.FC<SmallNewsCardProps> = ({ news }) => {
  const slug = generateSlug(news.titulo, news.codigo)

  return (
    <Link
      href={`/noticias/${slug}`}
      className="w-full flex justify-start items-start gap-4 group cursor-pointer bg-white"
    >
      <div className="w-28 h-28 relative shrink-0 rounded-[10px] overflow-hidden">
        <Image
          src={news.dirImagen}
          alt={news.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-2">
        <div className="flex flex-col justify-start items-start gap-1">
          <h4 className="text-neutral-900 text-sm font-semibold font-['Poppins'] leading-[1.2] line-clamp-2 group-hover:text-rose-800 transition-colors">
            {news.titulo}
          </h4>
          <div className="flex items-center gap-1.5 py-0.5">
            <Calendar className="w-2.5 h-2.5 text-rose-800" strokeWidth={2.5} />
            <span className="text-neutral-900 text-[10px] font-normal font-['Poppins'] leading-none">
              {formatDate(news.fecInicio)}
            </span>
          </div>
        </div>
        <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-tight line-clamp-4 lg:line-clamp-3">
          {news.descripcion}
        </p>
      </div>
    </Link>
  )
}

export default SmallNewsCard
