const BottomNewsSkeleton: React.FC = () => {
  return (
    <div className="flex min-h-[400px] w-full animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:flex-row">
      {/* Left Side - Image Skeleton */}
      <div className="relative h-[600px] w-full bg-gray-200 lg:min-h-full lg:w-3/4">
        {/* Overlay Content Skeleton */}
        <div className="absolute inset-y-0 left-0 flex w-full flex-col justify-center gap-6 bg-gray-300/60 p-8 md:w-1/3">
          <div className="h-8 w-3/4 rounded bg-gray-400/40" />
          <div className="h-6 w-full rounded bg-gray-400/40" />
          <div className="h-5 w-28 rounded bg-gray-400/40" />
        </div>
      </div>

      {/* Right Side - Content Skeleton */}
      <div className="flex w-full flex-col items-start justify-center gap-6 bg-white p-8 lg:w-1/4 lg:p-12">
        <div className="h-3 w-20 rounded bg-gray-200" />
        <div className="h-7 w-full rounded bg-gray-200" />
        <div className="h-4 w-28 rounded bg-gray-200" />
        <div className="w-full space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>
        <div className="h-4 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default BottomNewsSkeleton;
