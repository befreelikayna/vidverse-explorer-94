export const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-video bg-gray-700 rounded-lg mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
};