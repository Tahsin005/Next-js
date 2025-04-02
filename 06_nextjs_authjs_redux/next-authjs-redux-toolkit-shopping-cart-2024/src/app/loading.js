import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Skeleton className="w-[400px] h-[400px] rounded-xl bg-gray-200 animate-pulse" />
    </div>
  );
}

export default Loading;
