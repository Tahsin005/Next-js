import { Skeleton } from "@/components/ui/skeleton";
import { LoaderPinwheel } from 'lucide-react';

export default function Loading() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <LoaderPinwheel className="animate-spin duration-150" size={100} />
        </div>
    );
}
