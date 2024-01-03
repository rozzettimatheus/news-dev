'use client'

type SubscribeButtonProps = {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className="w-full md:w-[260px] h-14 md:h-16 rounded-full outline-none bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200  text-zinc-900 text-xl font-bold"
    >
      Subscribe now
    </button>
  )
}
