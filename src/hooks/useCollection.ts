import { useState, useCallback } from 'react'

const STORAGE_KEY = 'figurinhas-copa-2026'

function loadOwned(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

function saveOwned(owned: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...owned]))
}

export function useCollection() {
  const [owned, setOwned] = useState<Set<string>>(loadOwned)

  const toggle = useCallback((id: string) => {
    setOwned(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      saveOwned(next)
      return next
    })
  }, [])

  const markAll = useCallback((ids: string[], value: boolean) => {
    setOwned(prev => {
      const next = new Set(prev)
      ids.forEach(id => value ? next.add(id) : next.delete(id))
      saveOwned(next)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    const empty = new Set<string>()
    saveOwned(empty)
    setOwned(empty)
  }, [])

  return { owned, toggle, markAll, reset }
}
