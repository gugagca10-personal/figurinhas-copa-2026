import { useState, useCallback } from 'react'

const STORAGE_KEY = 'figurinhas-copa-2026-repetidas'

function load(): Map<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Map()
    return new Map(JSON.parse(raw) as [string, number][])
  } catch {
    return new Map()
  }
}

function save(map: Map<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...map]))
}

export function useRepeated() {
  const [repeated, setRepeated] = useState<Map<string, number>>(load)

  const increment = useCallback((id: string) => {
    setRepeated(prev => {
      const next = new Map(prev)
      next.set(id, (next.get(id) ?? 0) + 1)
      save(next)
      return next
    })
  }, [])

  const decrement = useCallback((id: string) => {
    setRepeated(prev => {
      const current = prev.get(id) ?? 0
      if (current <= 0) return prev
      const next = new Map(prev)
      if (current === 1) next.delete(id)
      else next.set(id, current - 1)
      save(next)
      return next
    })
  }, [])

  const totalRepeated = [...repeated.values()].reduce((a, b) => a + b, 0)

  return { repeated, increment, decrement, totalRepeated }
}
