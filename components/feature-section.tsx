import { Check, Gift, Globe, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">特徴 / Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Nippon Snack Box?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the unique benefits of our Japanese snack subscription service
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Gift className="h-12 w-12 text-rose-600" />
              <CardTitle className="mt-2">Authentic Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Carefully curated snacks directly from Japan, including limited seasonal items not available overseas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Truck className="h-12 w-12 text-rose-600" />
              <CardTitle className="mt-2">Global Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Fast and reliable shipping to over 50 countries worldwide with tracking information provided.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Globe className="h-12 w-12 text-rose-600" />
              <CardTitle className="mt-2">Cultural Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Each box includes a guide explaining the cultural significance and history behind each snack.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Check className="h-12 w-12 text-rose-600" />
              <CardTitle className="mt-2">Flexible Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Choose from monthly, quarterly, or annual subscriptions with the ability to pause or cancel anytime.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
