import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void
  screenshot: string | null
}

export const ScreenshotButton = ({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    onScreenshotTook(base64image)

    setIsTakingScreenshot(false)
  }

  const handleDeleteScreenshot = () => {
    onScreenshotTook(null)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={handleDeleteScreenshot}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 border-transparent rounded-md bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-white dark:focus:ring-offset-zinc-900"
    >
      {isTakingScreenshot ? (
        <LoadingSpinner />
      ) : (
        <Camera className="w-6 h-6 dark:text-zinc-100 text-zinc-800" />
      )}
    </button>
  )
}
