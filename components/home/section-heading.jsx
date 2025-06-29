export default function SectionHeading({ children = null }) {
  return (
    <div className="inline-block">
      <span className="bg-orange-200 px-4 py-2 rounded-md text-sm font-medium text-orange-800">{children}</span>
    </div>
  )
}