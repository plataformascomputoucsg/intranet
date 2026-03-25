const NewsSkeleton: React.FC = () => {
  return (
    <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
      <div className="relative mx-4 flex h-auto w-full flex-col items-start gap-7 py-4">
        {/* Main News Skeleton */}
        <div className="relative flex min-h-[300px] w-full animate-pulse flex-col items-center gap-[25px] md:flex-row">
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[7.1px] bg-gray-200 md:w-1/2" />
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="h-6 w-full rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-20 w-full rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        </div>

        {/* Grid News Skeleton */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex w-full animate-pulse flex-col items-center justify-start gap-4 sm:flex-row"
            >
              <div className="relative h-[112px] w-full shrink-0 rounded-[9.77px] bg-gray-200 sm:w-[112px]" />
              <div className="flex min-h-24 w-full flex-col items-start justify-start gap-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-3 w-24 rounded bg-gray-200" />
                <div className="h-12 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
