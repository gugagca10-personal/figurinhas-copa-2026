import { memo, useMemo } from 'react'
import type { Sticker } from '../data/stickers'
import { StickerCard } from './StickerCard'

interface Props {
  teamCode: string
  teamName: string
  flag: string
  group: string
  stickers: Sticker[]
  owned: Set<string>
  onToggle: (id: string) => void
  onMarkAll: (ids: string[], value: boolean) => void
}

export const TeamSection = memo(function TeamSection({
  teamCode, teamName, flag, group, stickers, owned, onToggle, onMarkAll,
}: Props) {
  const { count, total, allOwned } = useMemo(() => {
    const c = stickers.filter(s => owned.has(s.id)).length
    return { count: c, total: stickers.length, allOwned: c === stickers.length }
  }, [stickers, owned])

  const pct = total > 0 ? Math.round((count / total) * 100) : 0
  const ids = stickers.map(s => s.id)
  const isSpecial = teamCode === 'FWC'

  return (
    <section className="mb-4">
      <div className={[
        'flex items-center gap-2 px-3 py-2 rounded-xl mb-2',
        isSpecial ? 'bg-yellow-950/60 border border-yellow-800/40' : 'bg-slate-800/80 border border-slate-700/40',
      ].join(' ')}>
        <span className="text-2xl leading-none" role="img" aria-label={teamName}>{flag}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-white text-sm truncate">{teamName}</span>
            {!isSpecial && (
              <span className="text-xs text-slate-400 shrink-0">Grupo {group}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${isSpecial ? 'bg-yellow-500' : 'bg-green-500'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className={`text-xs shrink-0 font-mono ${count === total ? 'text-green-400 font-bold' : 'text-slate-400'}`}>
              {count}/{total}
            </span>
          </div>
        </div>
        <button
          onClick={() => onMarkAll(ids, !allOwned)}
          className={[
            'shrink-0 text-xs px-2 py-1 rounded-md font-medium transition-colors',
            allOwned
              ? 'bg-green-600 text-white hover:bg-red-600'
              : 'bg-slate-600 text-slate-200 hover:bg-green-600',
          ].join(' ')}
          title={allOwned ? 'Desmarcar todas' : 'Marcar todas'}
        >
          {allOwned ? '✓ Todas' : 'Marcar'}
        </button>
      </div>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))' }}>
        {stickers.map(s => (
          <StickerCard
            key={s.id}
            sticker={s}
            owned={owned.has(s.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  )
})
