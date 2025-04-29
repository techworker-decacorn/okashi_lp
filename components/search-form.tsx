"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchForm() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
      <Input
        className="pr-10"
        placeholder="Search..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-gray-700"
        size="icon"
        type="submit"
        variant="ghost"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}
