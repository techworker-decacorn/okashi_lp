export function UnboxingExperience() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
                開封体験 / Unboxing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Premium Unboxing Experience</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Each Nippon Snack Box is carefully designed to deliver joy from the moment it arrives at your doorstep.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Beautiful Packaging</h3>
                  <p className="text-gray-500">
                    Each box features traditional Japanese design elements and premium materials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Cultural Guide</h3>
                  <p className="text-gray-500">
                    Detailed booklet explaining each snack's origin, ingredients, and cultural significance
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Seasonal Surprises</h3>
                  <p className="text-gray-500">Special themed items that celebrate Japanese festivals and seasons</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Collector's Items</h3>
                  <p className="text-gray-500">
                    Occasional exclusive items like chopsticks, tea samples, or small cultural artifacts
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-4">
              <img
                alt="Premium Box Packaging"
                className="h-60 w-full rounded-lg object-cover"
                src="/premium-packaging.png"
              />
              <img
                alt="Cultural Guide Booklet"
                className="h-60 w-full rounded-lg object-cover"
                src="/cultural-guide.png"
              />
            </div>
            <div className="grid gap-4">
              <img
                alt="Seasonal Themed Items"
                className="h-60 w-full rounded-lg object-cover"
                src="/seasonal-items.png"
              />
              <img alt="Unboxing Moment" className="h-60 w-full rounded-lg object-cover" src="/unboxing-moment.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
