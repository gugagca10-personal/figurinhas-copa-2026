import { GROUPS } from '../data/stickers'

export type StatusFilter = 'all' | 'have' | 'missing'

interface Props {
  selectedGroup: string
  onGroupChange: (g: string) => void
  search: string
  onSearchChange: (s: string) => void
  statusFilter: StatusFilter
  onStatusChange: (s: StatusFilter) => void
}

export function FilterBar({ selectedGroup, onGroupChange, search, onSearchChange, statusFilter, onStatusChange }: Props) {
  return (
    <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-700/50 px-3 py-2 flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="search"
          placeholder="Buscar país..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-500"
        />
        <select
          value={selectedGroup}
          onChange={e => onGroupChange(e.target.value)}
          className="bg-slate-800 border border-slate-600 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none focus:border-green-500"
        >
          <option value="">Todos</option>
          {GROUPS.map(g => (
            <option key={g} value={g}>{g === 'Especial' ? '⭐ Especial' : `Grupo ${g}`}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-1.5">
        {(['all', 'have', 'missing'] as StatusFilter[]).map(s => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            className={[
              'flex-1 text-xs py-1.5 rounded-lg font-medium transition-colors',
              statusFilter === s
                ? s === 'have'
                  ? 'bg-green-600 text-white'
                  : s === 'missing'
                    ? 'bg-red-700 text-white'
                    : 'bg-slate-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700',
            ].join(' ')}
          >
            {s === 'all' ? 'Todas' : s === 'have' ? '✓ Tenho' : '✗ Faltam'}
          </button>
        ))}
      </div>
    </div>
  )
}
