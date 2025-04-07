import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-12">
      <div className="w-full py-12 md:py-24 lg:py-32 bg-estate-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-12 w-[300px] mx-auto bg-white/20" />
              <Skeleton className="h-6 w-[500px] mx-auto bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Skeleton className="h-6 w-[150px] mb-4" />
                <Skeleton className="h-10 w-[300px] mb-4" />
                <Skeleton className="h-24 w-full mb-6" />
                <div className="space-y-3 mb-8">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Skeleton className="h-5 w-5 mt-0.5" />
                      <Skeleton className="h-5 w-full" />
                    </div>
                  ))}
                </div>
                <Skeleton className="h-10 w-[200px]" />
              </div>
              <div className="flex justify-center">
                <Skeleton className="w-full max-w-md h-[400px] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

