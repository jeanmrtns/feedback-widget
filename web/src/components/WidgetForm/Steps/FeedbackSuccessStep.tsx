import successImage from '../../../assets/success.svg'
import { CloseWidgetButton } from '../../CloseWidgetButton'

interface FeedbackSuccessStepProps {
  onRestartFeedback: () => void
}

export const FeedbackSuccessStep = ({
  onRestartFeedback,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseWidgetButton />
      </header>

      <div className="flex flex-col items-center w-[304px]">
        <img className="h-10 w-10 mt-10 mb-2" src={successImage} alt="" />
        <strong className="font-normal dark:text-zinc-100 text-zinc-800">
          Agradecemos o feedback!
        </strong>

        <button
          type="button"
          onClick={onRestartFeedback}
          className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded mt-6 mb-12 text-zinc-800 dark:text-zinc-100 focus:ring-2 focus:ring-brand-500 focus:outline-none"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
