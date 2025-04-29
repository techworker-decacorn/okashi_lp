export function VisualShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
              お菓子の世界 / Snack Gallery
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Japanese Snack Culture
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A visual journey through the colorful and diverse world of Japanese snacks
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl">
            <img
              alt="Colorful Japanese Candies"
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src="/colorful-candies.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Sweet Treats</h3>
                <p className="text-gray-200">Colorful and delightful Japanese candies and confections</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <img
              alt="Traditional Japanese Gift Box"
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src="/gift-box.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Premium Packaging</h3>
                <p className="text-gray-200">Beautifully presented in traditional Japanese style</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <img
              alt="Japanese Sweets Assortment"
              className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src="/sweets-assortment.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end">
              <div>
                <h3 className="text-xl font-bold text-white">Curated Selection</h3>
                <p className="text-gray-200">Carefully selected variety of authentic Japanese treats</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Each month brings a new selection of premium Japanese snacks, from traditional wagashi to modern favorites
          </p>
        </div>
      </div>
    </section>
  )
}
