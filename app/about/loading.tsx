import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-12">
      <div className="w-full py-12 md:py-24 lg:py-32 bg-estate-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-12 w-[300px] mx-auto" />
              <Skeleton className="h-6 w-[500px] mx-auto" />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Skeleton className="h-10 w-[150px]" />
              <Skeleton className="h-10 w-[150px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="space-y-4 text-center mb-12">
          <Skeleton className="h-10 w-[300px] mx-auto" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="relative pl-8 pb-8">
              <Skeleton className="absolute left-0 top-0 h-6 w-6 rounded-full -translate-x-1/2" />
              <Skeleton className="h-6 w-[200px] mb-2" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-12 md:py-24 lg:py-32 bg-estate-primary">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <Skeleton className="h-10 w-[300px] mx-auto" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-background rounded-lg p-6">
                <Skeleton className="h-6 w-[150px] mb-4" />
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

