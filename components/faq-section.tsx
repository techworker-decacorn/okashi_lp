import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-600">
              よくある質問 / FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about our Japanese snack subscription
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Which countries do you ship to?</AccordionTrigger>
              <AccordionContent>
                We currently ship to over 50 countries worldwide, including the United States, Canada, the United
                Kingdom, Australia, most European countries, and select countries in Asia and South America. You can
                check if we ship to your country during the checkout process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Shipping times vary by destination. Generally, orders arrive within 7-14 business days to North America,
                10-18 days to Europe, and 14-21 days to other international destinations. All shipments include tracking
                information so you can monitor your package's journey.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize my snack box?</AccordionTrigger>
              <AccordionContent>
                While our standard boxes are curated to provide a balanced experience of Japanese snacks, we do offer a
                premium customization option for annual subscribers. You can indicate preferences (sweet vs. savory,
                spicy tolerance, etc.) and we'll do our best to accommodate within the seasonal selections available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are there any dietary options available?</AccordionTrigger>
              <AccordionContent>
                We currently offer a vegetarian option. Due to the nature of Japanese snacks and our sourcing process,
                we cannot guarantee boxes that are vegan, gluten-free, or free from specific allergens. Each box comes
                with detailed ingredient information in English.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I cancel or pause my subscription?</AccordionTrigger>
              <AccordionContent>
                You can easily manage your subscription through your account dashboard. Subscriptions can be paused for
                up to 3 months or canceled at any time before your next billing cycle. There are no cancellation fees or
                penalties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer gift subscriptions?</AccordionTrigger>
              <AccordionContent>
                Yes! Our gift subscriptions are available for 1, 3, 6, or 12 months. You can schedule the delivery date
                and include a personalized message. Gift recipients will receive a digital notification before their
                first box ships.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
