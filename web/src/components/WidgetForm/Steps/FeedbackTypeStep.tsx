import { type FeedbackType, feedbackTypes } from '..'
import { CloseWidgetButton } from '../../CloseWidgetButton'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (key: FeedbackType) => void
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseWidgetButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-100 border-2 border-transparent dark:bg-zinc-800 rounded-lg text-zinc-800 dark:text-white text-sm leading-6 gap-2 hover:border-brand-500 focus:border-brand-500 focus:outline-none py-5 w-24 flex-1 flex flex-col items-center"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
