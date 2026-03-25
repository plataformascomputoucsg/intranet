const EventMainSkeleton: React.FC = () => {
  return (
    <div className="relative mt-[22.3px] flex h-auto w-full animate-pulse flex-col items-start gap-7 px-4">
      {/* Month carousel skeleton */}
      <div className="flex w-full justify-center gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 w-20 rounded-full bg-gray-200" />
        ))}
      </div>

      {/* Search input skeleton */}
      <div className="w-full">
        <div className="h-11 w-full rounded-lg bg-gray-200" />
      </div>

      {/* Day carousel skeleton */}
      <div className="relative w-full self-stretch rounded-lg bg-neutral-50 p-4">
        <div className="flex w-full items-center justify-between gap-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-16 w-14 shrink-0 rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Header title skeleton */}
      <div className="flex gap-2">
        <div className="h-6 w-24 rounded bg-gray-200" />
        <div className="h-6 w-32 rounded bg-gray-300" />
      </div>

      {/* Event cards grid skeleton */}
      <div className="grid w-full grid-cols-3 gap-x-[15px] gap-y-[30px] pr-4 pb-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="h-64 w-full rounded-[9.77px] bg-gray-200" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="h-3 w-32 rounded bg-gray-200" />
              <div className="h-3 w-40 rounded bg-gray-200" />
              <div className="h-12 w-full rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventMainSkeleton;
