import { PiSpinnerGapBold } from 'react-icons/pi'

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-yellow-400 dark:bg-black">
      <div className="animate-spin text-5xl">
        <PiSpinnerGapBold />
      </div>
      <p className="text-2xl">Loading...</p>
    </div>
  )
}
