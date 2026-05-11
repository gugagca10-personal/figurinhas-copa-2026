import { memo } from 'react'
import type { Sticker } from '../data/stickers'

interface Props {
  sticker: Sticker
  count: number
  owned: boolean
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
}

export const RepeatedCard = memo(function RepeatedCard({ sticker, count, owned, onIncrement, onDecrement }: Props) {
  const hasRepeats = count > 0

  return (
    <div
      className={[
        'flex flex-col rounded-lg border-2 overflow-hidden transition-all duration-150',
        hasRepeats
          ? 'border-amber-500 bg-amber-950/40'
          : 'border-slate-700 bg-slate-800/50',
      ].join(' ')}
    >
      <div className={[
        'text-center py-1 text-xs font-bold leading-tight',
        hasRepeats ? 'text-amber-300' : 'text-slate-500',
      ].join(' ')}>
        {sticker.code}
        {sticker.foil && <span className="text-yellow-400"> ★</span>}
        {!owned && hasRepeats && (
          <div className="text-[8px] text-slate-500 leading-none">sem colar</div>
        )}
      </div>

      <div className="flex items-center border-t border-slate-700/50">
        <button
          onClick={() => onDecrement(sticker.id)}
          disabled={count === 0}
          className="flex-1 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-bold active:scale-90 touch-manipulation"
        >
          −
        </button>
        <span className={[
          'flex-1 text-center text-sm font-bold py-1.5',
          hasRepeats ? 'text-amber-300' : 'text-slate-600',
        ].join(' ')}>
          {count}
        </span>
        <button
          onClick={() => onIncrement(sticker.id)}
          className="flex-1 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors text-sm font-bold active:scale-90 touch-manipulation"
        >
          +
        </button>
      </div>
    </div>
  )
})
