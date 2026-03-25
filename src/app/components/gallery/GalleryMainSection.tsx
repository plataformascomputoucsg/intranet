import { Suspense } from 'react';
import GalleryContent from './GalleryContent';

const GallerySkeleton = () => (
  <div className="grid w-full grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex animate-pulse flex-col gap-3">
        <div className="aspect-[4/3] w-full rounded-[15px] bg-slate-200" />
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-3 w-1/4 rounded bg-slate-200" />
      </div>
    ))}
  </div>
);

const GalleryMainSection = () => {
  return (
    <div className="relative mb-12 flex w-full flex-col items-start gap-[15px]">
      <div className="relative z-0 h-auto w-full overflow-hidden rounded-[20px] bg-white p-6 shadow-[0px_10px_30px_#00000012] md:p-10">
        <Suspense fallback={<GallerySkeleton />}>
          <GalleryContent />
        </Suspense>
      </div>
    </div>
  );
};

export default GalleryMainSection;
