import { useState, useMemo } from 'react'
import { ALL_STICKERS, TEAMS } from './data/stickers'
import { useCollection } from './hooks/useCollection'
import { useRepeated } from './hooks/useRepeated'
import { StatsBar } from './components/StatsBar'
import { FilterBar, type StatusFilter } from './components/FilterBar'
import { TeamSection } from './components/TeamSection'
import { RepeatedSection } from './components/RepeatedSection'
import type { Mode } from './components/ModeToggle'

const SPECIAL_TEAM = {
  code: 'FWC',
  name: 'Especial',
  flag: '⭐',
  group: 'Especial',
  confederation: '',
}

const ALL_SECTIONS = [SPECIAL_TEAM, ...TEAMS]

function normalizeName(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function App() {
  const { owned, toggle, markAll, reset } = useCollection()
  const { repeated, increment, decrement, totalRepeated } = useRepeated()

  const [mode, setMode] = useState<Mode>('album')
  const [selectedGroup, setSelectedGroup] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  const stickersByTeam = useMemo(() => {
    const map = new Map<string, typeof ALL_STICKERS>()
    for (const s of ALL_STICKERS) {
      const list = map.get(s.teamCode) ?? []
      list.push(s)
      map.set(s.teamCode, list)
    }
    return map
  }, [])

  const filteredSections = useMemo(() => {
    const q = normalizeName(search)
    return ALL_SECTIONS.filter(team => {
      if (selectedGroup && team.group !== selectedGroup) return false
      if (q && !normalizeName(team.name).includes(q) && !normalizeName(team.code).includes(q)) return false

      if (mode === 'album' && statusFilter !== 'all') {
        const stickers = stickersByTeam.get(team.code) ?? []
        if (statusFilter === 'have') return stickers.some(s => owned.has(s.id))
        if (statusFilter === 'missing') return stickers.some(s => !owned.has(s.id))
      }

      if (mode === 'repetidas' && statusFilter === 'have') {
        const stickers = stickersByTeam.get(team.code) ?? []
        return stickers.some(s => (repeated.get(s.id) ?? 0) > 0)
      }

      return true
    })
  }, [selectedGroup, search, statusFilter, mode, stickersByTeam, owned, repeated])

  const handleReset = () => {
    if (confirm('Resetar toda a coleção? Isso apagará tudo.')) reset()
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <StatsBar
        ownedCount={owned.size}
        totalRepeated={totalRepeated}
        mode={mode}
        onModeChange={m => { setMode(m); setStatusFilter('all') }}
        onReset={handleReset}
      />
      <FilterBar
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        mode={mode}
      />

      <main className="flex-1 px-3 py-3 max-w-2xl mx-auto w-full">
        {mode === 'repetidas' && (
          <div className="mb-3 px-3 py-2 bg-amber-950/40 border border-amber-800/30 rounded-xl text-sm text-amber-300">
            🔄 <strong>{totalRepeated}</strong> cópia{totalRepeated !== 1 ? 's' : ''} repetida{totalRepeated !== 1 ? 's' : ''} para trocar
          </div>
        )}

        {filteredSections.length === 0 ? (
          <div className="text-center text-slate-500 mt-16">
            <p className="text-4xl mb-3">🔍</p>
            <p>Nenhum resultado encontrado</p>
          </div>
        ) : (
          filteredSections.map(team => {
            const stickers = stickersByTeam.get(team.code) ?? []

            if (mode === 'album') {
              const filtered = statusFilter === 'have'
                ? stickers.filter(s => owned.has(s.id))
                : statusFilter === 'missing'
                  ? stickers.filter(s => !owned.has(s.id))
                  : stickers
              if (filtered.length === 0) return null
              return (
                <TeamSection
                  key={team.code}
                  teamCode={team.code}
                  teamName={team.name}
                  flag={team.flag}
                  group={team.group}
                  stickers={filtered}
                  owned={owned}
                  onToggle={toggle}
                  onMarkAll={markAll}
                />
              )
            }

            const filtered = statusFilter === 'have'
              ? stickers.filter(s => (repeated.get(s.id) ?? 0) > 0)
              : stickers
            if (filtered.length === 0) return null
            return (
              <RepeatedSection
                key={team.code}
                teamCode={team.code}
                teamName={team.name}
                flag={team.flag}
                group={team.group}
                stickers={filtered}
                repeated={repeated}
                owned={owned}
                onIncrement={increment}
                onDecrement={decrement}
              />
            )
          })
        )}
      </main>

      <footer className="text-center text-slate-600 text-xs py-3 pb-safe">
        980 figurinhas · 48 seleções · Copa do Mundo 2026
      </footer>
    </div>
  )
}
