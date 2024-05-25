import { PiSpinnerGapBold } from 'react-icons/pi'

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-yellow-400 bg-white dark:bg-black">
      <div className="animate-spin text-5xl">
        <PiSpinnerGapBold />
      </div>
      <p className="text-2xl">Loading...</p>
    </div>
  )
}
