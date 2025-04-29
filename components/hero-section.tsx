import { Button } from "@/components/ui/button"
import { SubscribeButton } from "@/components/subscribe-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/asanoha-and-seigaiha.png')] opacity-5" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-rose-600 sm:text-4xl md:text-5xl lg:text-6xl">
                NIPPON SNACK BOX
              </h1>
              <p className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">日本のお菓子を世界へ</p>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Authentic Japanese snacks delivered to your doorstep every month. Experience the unique flavors of Japan
                without leaving home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <SubscribeButton />
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
              <img
                alt="Japanese Snack Box Premium Display"
                className="h-full w-full object-cover"
                src="/premium-snack-display.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
