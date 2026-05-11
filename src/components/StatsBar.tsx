import { TOTAL } from '../data/stickers'
import { ModeToggle, type Mode } from './ModeToggle'

interface Props {
  ownedCount: number
  totalRepeated: number
  mode: Mode
  onModeChange: (m: Mode) => void
  onReset: () => void
}

export function StatsBar({ ownedCount, totalRepeated, mode, onModeChange, onReset }: Props) {
  const missing = TOTAL - ownedCount
  const pct = Math.round((ownedCount / TOTAL) * 100)

  return (
    <header className="bg-slate-900 border-b border-slate-700/50 px-3 pt-safe pt-3 pb-2 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚽</span>
          <div>
            <h1 className="text-white font-bold text-sm leading-tight">Figurinhas Copa 2026</h1>
            <p className="text-slate-400 text-[11px]">Panini FIFA World Cup™</p>
          </div>
        </div>
        <button
          onClick={onReset}
          title="Resetar coleção"
          className="text-slate-500 hover:text-red-400 text-xs px-2 py-1 rounded transition-colors"
        >
          Resetar
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex gap-3 text-xs font-mono shrink-0">
          <span className="text-green-400 font-bold">{ownedCount} ✓</span>
          <span className="text-slate-500">/</span>
          <span className="text-red-400">{missing} ✗</span>
          <span className="text-slate-500 font-sans">{pct}%</span>
        </div>
      </div>

      <ModeToggle mode={mode} onChange={onModeChange} totalRepeated={totalRepeated} />
    </header>
  )
}
