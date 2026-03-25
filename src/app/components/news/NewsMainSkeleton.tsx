const NewsMainSkeleton: React.FC = () => {
  return (
    <div className="flex w-full animate-pulse flex-col gap-8 xl:flex-row">
      {/* Left Column: Featured + Bottom Grid */}
      <div className="flex w-full flex-col gap-8 xl:w-2/3">
        {/* Featured Section Skeleton */}
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="h-[300px] w-full rounded-lg bg-gray-200 md:w-1/2" />
          <div className="flex w-full flex-col gap-4 py-2 md:w-1/2">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="h-6 w-full rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-20 w-full rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        </div>

        {/* Bottom Section Skeleton: 2x2 Grid */}
        <div className="grid w-full grid-cols-1 gap-8 border-t border-gray-100 pt-8 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
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
      </div>

      {/* Right Column: Sidebar Skeleton */}
      <div className="flex w-full flex-col gap-6 xl:w-1/3">
        {[...Array(5)].map((_, i) => (
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
    </div>
  );
};

export default NewsMainSkeleton;
