import { useEffect, useState } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

export const SoundSwitch = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(new Audio('/assets/sound.mp3'))
  const [playbackPosition, setPlaybackPosition] = useState(0)

  useEffect(() => {
    audio.loop = isPlaying
    if (isPlaying) {
      audio.currentTime = playbackPosition // Set the playback position before playing
      audio.play()
    } else {
      setPlaybackPosition(audio.currentTime) // Store the current playback position when pausing
      audio.pause()
    }
  }, [isPlaying, audio, playbackPosition])

  const toggleSound = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying) // Toggle the state
  }

  return (
    <button
      onClick={toggleSound}
      className="text-3xl relative transition-transform transform duration-300 hover:scale-110 hover:text-yellow-300"
    >
      {isPlaying ? <FiVolumeX /> : <FiVolume2 />}
      <span className="absolute inset-0 -m-1 border-2 border-transparent rounded-full transition-all duration-500 hover:border-yellow-300"></span>
    </button>
  )
}
