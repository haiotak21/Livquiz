"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar({ children }) {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex w-full max-w-md items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter quiz code or search..."
            className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-200 focus:border-purple-500"
          />
        </div>
        <Button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full border-r-4 border-r-purple-800 border-b-4 border-b-purple-800">
          {children}
        </Button>
      </div>
    </div>
  )
}