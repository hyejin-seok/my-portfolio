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
    <button onClick={toggleSound} className="text-3xl hover:text-orange-200">
      {isPlaying ? <FiVolumeX /> : <FiVolume2 />}
    </button>
  )
}
