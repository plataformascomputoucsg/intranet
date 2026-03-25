const EventSkeleton: React.FC = () => {
  return (
    <>
      {/* Day title skeleton */}
      <div className="relative flex w-full flex-[0_0_auto] animate-pulse items-start self-stretch">
        <div className="h-5 w-48 rounded bg-gray-200" />
      </div>

      {/* Day carousel skeleton */}
      <div className="relative w-full animate-pulse self-stretch rounded-lg bg-neutral-50 p-4">
        <div className="flex w-full items-center justify-between gap-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="h-16 w-14 shrink-0 rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>

      {/* Event card skeleton */}
      <div className="flex min-h-0 w-full flex-1 animate-pulse flex-col gap-4">
        <div className="relative h-52 w-full shrink-0 rounded-[9.77px] bg-gray-200" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-3 w-32 rounded bg-gray-200" />
          <div className="h-12 w-full rounded bg-gray-200" />
        </div>
      </div>
    </>
  );
};

export default EventSkeleton;
