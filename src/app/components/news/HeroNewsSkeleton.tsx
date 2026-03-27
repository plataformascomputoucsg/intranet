const HeroNewsSkeleton: React.FC = () => {
  return (
    <section className="mx-auto w-full animate-pulse py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* TOP ROW */}

        {/* Top Left: 2 Small Items Skeleton */}
        <div className="flex flex-col justify-start gap-6 lg:col-span-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex w-full gap-4">
              <div className="h-24 w-24 shrink-0 rounded-lg bg-gray-200" />
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-3 w-24 rounded bg-gray-200" />
                <div className="h-10 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Top Right: Large Hero Image Skeleton */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-200 lg:col-span-8 lg:h-[470px] lg:min-h-0" />

        {/* BOTTOM ROW */}

        {/* 3 Medium Items Skeleton */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-16/10 w-full rounded-xl bg-gray-200" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-12 w-full rounded bg-gray-200" />
                <div className="h-3 w-20 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroNewsSkeleton;
