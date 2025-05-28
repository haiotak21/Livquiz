import type React from "react"
interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="inline-block">
      <span className="bg-orange-200 px-4 py-2 rounded-md text-sm font-medium text-orange-800">{children}</span>
    </div>
  )
}
