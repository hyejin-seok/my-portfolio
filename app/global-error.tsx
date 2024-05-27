'use client'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex-col items-center bg-brown text-white">
          <h2 className="text-2xl">Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="mx-auto w-fit bg-yellow-200 text-2xl text-black"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
