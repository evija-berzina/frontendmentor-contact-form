import IconCheck from '../assets/images/icon-success-check.svg';

export function SuccessMessage() {

  return (
    <div className="w-full flex justify-center">
      <div role="alert" className="bg-[hsl(var(--green-900))] text-(length:--text-tiny) text-[hsl(var(--white))] flex flex-col gap-2 p-4 rounded-xl mx-auto max-w-md">
        <h2 className="flex items-center gap-2 font-bold text-xs">
          <img src={IconCheck} className="w-4 h-4" alt="Success check icon" />
          <span>Message Sent!</span>
        </h2>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    </div>
  )
}