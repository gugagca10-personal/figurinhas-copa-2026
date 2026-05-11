export type Mode = 'album' | 'repetidas'

interface Props {
  mode: Mode
  onChange: (m: Mode) => void
  totalRepeated: number
}

export function ModeToggle({ mode, onChange, totalRepeated }: Props) {
  return (
    <div className="flex gap-1 bg-slate-800 rounded-xl p-1">
      <button
        onClick={() => onChange('album')}
        className={[
          'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
          mode === 'album'
            ? 'bg-green-600 text-white'
            : 'text-slate-400 hover:text-slate-200',
        ].join(' ')}
      >
        <span>📋</span> Meu Álbum
      </button>
      <button
        onClick={() => onChange('repetidas')}
        className={[
          'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
          mode === 'repetidas'
            ? 'bg-amber-600 text-white'
            : 'text-slate-400 hover:text-slate-200',
        ].join(' ')}
      >
        <span>🔄</span> Repetidas
        {totalRepeated > 0 && (
          <span className={[
            'text-xs px-1.5 py-0.5 rounded-full font-bold',
            mode === 'repetidas' ? 'bg-amber-800 text-amber-200' : 'bg-slate-700 text-amber-400',
          ].join(' ')}>
            {totalRepeated}
          </span>
        )}
      </button>
    </div>
  )
}
