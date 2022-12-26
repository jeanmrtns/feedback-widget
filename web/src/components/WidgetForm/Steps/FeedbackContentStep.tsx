import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseWidgetButton } from '../../CloseWidgetButton'
import { ScreenshotButton } from '../../ScreenshotButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onRestartFeedback: () => void
  onFeedbackSent: () => void
}

export const FeedbackContentStep = ({
  feedbackType,
  onRestartFeedback,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmitFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(comment, screenshot)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100"
          onClick={onRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseWidgetButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] border border-zinc-300 dark:border-zinc-600 w-full rounded-md min-h-[112px] text-sm placeholder-zinc-400 text-zinc-900 bg-transparent dark:text-zinc-100 py-2 px-3 focus:border-2 focus:outline-none focus:ring-offset-2 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2 items-center justify-between">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={!comment}
            className="p-2 bg-brand-500 rounded text-white hover:bg-brand-400 transition-colors border-transparent flex-1 flex justify-center items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-white dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
