import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'

export const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel className="z-10">
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 text-white rounded-full p-3 h-12 flex items-center group drop-shadow-lg hover:drop-shadow-none">
        <ChatTeardropDots className="w-6 h-6" size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-md transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}
