import CardNews from './CardNews';
import { ComunicacionEspecifica } from '@/app/types/comunicaciones';

interface GridNewsProps {
  newsItems: ComunicacionEspecifica[];
}

const GridNews: React.FC<GridNewsProps> = ({ newsItems }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
      {newsItems.map((item) => (
        <CardNews key={item.codigo} news={item} />
      ))}
    </div>
  );
};

export default GridNews;
