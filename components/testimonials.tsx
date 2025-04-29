import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
              お客様の声 / Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from snack lovers around the world
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700">
                  "I've tried several Japanese snack boxes, but Nippon Snack Box is by far the best! The variety is
                  amazing, and I love learning about each snack's cultural significance."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <img alt="Sarah J." className="h-10 w-10 rounded-full object-cover" src="/serene-gaze.png" />
                <div>
                  <p className="font-medium">Sarah J.</p>
                  <p className="text-sm text-gray-500">United States</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700">
                  "As someone who lived in Japan for years, I can confirm these snacks are the real deal. The seasonal
                  selections are particularly impressive and bring back wonderful memories."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <img
                  alt="Michael T."
                  className="h-10 w-10 rounded-full object-cover"
                  src="/thoughtful-gaze.png"
                />
                <div>
                  <p className="font-medium">Michael T.</p>
                  <p className="text-sm text-gray-500">Australia</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700">
                  "My children love the monthly surprise of Japanese snacks. It's become a family tradition to unbox
                  together and try new flavors. The cultural guide is educational and fun!"
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <img alt="Emma L." className="h-10 w-10 rounded-full object-cover" src="/serene-blonde.png" />
                <div>
                  <p className="font-medium">Emma L.</p>
                  <p className="text-sm text-gray-500">United Kingdom</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
