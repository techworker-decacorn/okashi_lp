import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">仕組み / Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple steps to start enjoying authentic Japanese snacks
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white">
              1
            </div>
            <img alt="Choose a Plan" className="h-48 w-full rounded-lg object-cover" src="/subscription-choice.png" />
            <h3 className="text-xl font-bold">Choose Your Plan</h3>
            <p className="text-center text-gray-500">
              Select from our monthly, quarterly, or annual subscription options based on your preferences.
            </p>
          </div>

          <div className="relative flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white">
              2
            </div>
            <img
              alt="We Curate and Ship"
              className="h-48 w-full rounded-lg object-cover"
              src="/packaging-process.png"
            />
            <h3 className="text-xl font-bold">We Curate & Ship</h3>
            <p className="text-center text-gray-500">
              Our team in Japan selects the best seasonal snacks and ships them directly to your doorstep.
            </p>
          </div>

          <div className="relative flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-white">
              3
            </div>
            <img
              alt="Enjoy Japanese Snacks"
              className="h-48 w-full rounded-lg object-cover"
              src="/enjoying-snacks.png"
            />
            <h3 className="text-xl font-bold">Enjoy & Discover</h3>
            <p className="text-center text-gray-500">
              Unbox your Japanese treats, read about their cultural significance, and enjoy the authentic flavors.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a className="inline-flex items-center gap-2 text-rose-600 hover:underline" href="#">
            Learn more about our process
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
