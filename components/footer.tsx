import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Nippon Snack Box</h3>
            <p className="text-gray-400">Bringing authentic Japanese snacks to snack lovers worldwide since 2020.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-rose-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-rose-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-rose-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-rose-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Gift a Box
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-rose-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for snack updates, Japanese culture insights, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                placeholder="Your email"
                type="email"
              />
              <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Nippon Snack Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
