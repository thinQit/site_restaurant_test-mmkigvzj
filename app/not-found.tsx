import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-semibold md:text-4xl">Page not found</h1>
      <p className="mt-3 text-base text-[#5B5B5B] md:text-lg">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
