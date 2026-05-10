import { memo } from 'react'
import type { Sticker } from '../data/stickers'

interface Props {
  sticker: Sticker
  owned: boolean
  onToggle: (id: string) => void
}

export const StickerCard = memo(function StickerCard({ sticker, owned, onToggle }: Props) {
  const isFoil = sticker.foil
  const isSpecial = sticker.type === 'special' || sticker.type === 'host' || sticker.type === 'museum'

  return (
    <button
      onClick={() => onToggle(sticker.id)}
      title={`${sticker.code} — ${sticker.label}`}
      className={[
        'relative flex flex-col items-center justify-center rounded-lg border-2 transition-all duration-150 select-none',
        'w-full aspect-square text-xs font-bold leading-tight',
        'active:scale-90 touch-manipulation',
        owned
          ? 'bg-green-500 border-green-400 text-white shadow-md shadow-green-900/30'
          : 'bg-slate-700 border-slate-600 text-slate-400 hover:border-slate-400',
        isFoil && !owned ? 'border-yellow-600/50' : '',
        isFoil && owned ? 'border-yellow-300 shadow-yellow-900/30' : '',
      ].join(' ')}
    >
      {owned && (
        <span className="absolute top-0.5 right-0.5 text-[10px] leading-none">✓</span>
      )}
      {isFoil && (
        <span className="absolute top-0.5 left-0.5 text-[10px] leading-none text-yellow-400">★</span>
      )}
      <span className={isSpecial ? 'text-[10px]' : ''}>
        {sticker.code}
      </span>
      {sticker.type === 'team_photo' && (
        <span className="text-[8px] opacity-70 mt-0.5">foto</span>
      )}
    </button>
  )
})
