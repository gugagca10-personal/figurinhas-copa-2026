import { memo, useMemo } from 'react'
import type { Sticker } from '../data/stickers'
import { RepeatedCard } from './RepeatedCard'

interface Props {
  teamCode: string
  teamName: string
  flag: string
  group: string
  stickers: Sticker[]
  repeated: Map<string, number>
  owned: Set<string>
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
}

export const RepeatedSection = memo(function RepeatedSection({
  teamCode, teamName, flag, group, stickers, repeated, owned, onIncrement, onDecrement,
}: Props) {
  const { teamTotal, teamCount } = useMemo(() => {
    const total = stickers.reduce((acc, s) => acc + (repeated.get(s.id) ?? 0), 0)
    const count = stickers.filter(s => (repeated.get(s.id) ?? 0) > 0).length
    return { teamTotal: total, teamCount: count }
  }, [stickers, repeated])

  const isSpecial = teamCode === 'FWC'

  return (
    <section className="mb-4">
      <div className={[
        'flex items-center gap-2 px-3 py-2 rounded-xl mb-2',
        isSpecial ? 'bg-yellow-950/60 border border-yellow-800/40' : 'bg-slate-800/80 border border-slate-700/40',
      ].join(' ')}>
        <span className="text-2xl leading-none">{flag}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-white text-sm truncate">{teamName}</span>
            {!isSpecial && (
              <span className="text-xs text-slate-400 shrink-0">Grupo {group}</span>
            )}
          </div>
          <span className="text-xs text-slate-400">
            {teamCount === 0
              ? 'Nenhuma repetida'
              : `${teamCount} figurinha${teamCount > 1 ? 's' : ''} · ${teamTotal} cópia${teamTotal > 1 ? 's' : ''}`}
          </span>
        </div>
        {teamTotal > 0 && (
          <span className="shrink-0 bg-amber-800/60 text-amber-300 text-xs font-bold px-2 py-1 rounded-md">
            +{teamTotal}
          </span>
        )}
      </div>

      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))' }}>
        {stickers.map(s => (
          <RepeatedCard
            key={s.id}
            sticker={s}
            count={repeated.get(s.id) ?? 0}
            owned={owned.has(s.id)}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </section>
  )
})
