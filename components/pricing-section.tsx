import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
              料金プラン / Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple & Affordable Subscription
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience authentic Japanese snacks with our value-packed box
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md">
          <Card className="relative border-rose-600">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-rose-600 px-3 py-1 text-sm font-medium text-white">
              Best Value
            </div>
            <CardHeader className="flex-1">
              <CardTitle className="text-2xl">Nippon Snack Box</CardTitle>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">$47.99</span>
                <span className="ml-1 text-xl text-muted-foreground">/ month</span>
              </div>
              <CardDescription className="mt-2">Free worldwide shipping included</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>12-15 premium Japanese snacks each month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Exclusive limited-edition items</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Cultural guide with snack history & information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Premium packaging with traditional Japanese design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Free express shipping worldwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Cancel or pause anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-rose-600" />
                  <span>Seasonal special items & occasional collector's gifts</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-lg">Subscribe Now</Button>
            </CardFooter>
          </Card>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>First box ships immediately after subscribing. No hidden fees or commitments.</p>
            <p className="mt-2">Satisfaction guaranteed or your money back.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
