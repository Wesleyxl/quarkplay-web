// src/context/AtomContext.tsx
import React, { createContext, useCallback, useContext, useState } from 'react'

interface AtomState {
  protons: number
  neutrons: number
  electrons: number
  setProtons: (n: number) => void
  setNeutrons: (n: number) => void
  setElectrons: (n: number) => void
  addProton: () => void
  addNeutron: () => void
  addElectron: () => void
  removeProton: () => void
  removeNeutron: () => void
  removeElectron: () => void
  setAtom: (p: number, n: number, e: number) => void
  // Você pode adicionar métodos de decaimento, reset, etc, aqui!
}

const AtomContext = createContext<AtomState | undefined>(undefined)

export function useAtom() {
  const ctx = useContext(AtomContext)
  if (!ctx) throw new Error('useAtom deve ser usado dentro do AtomProvider')
  return ctx
}

export const AtomProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [protons, setProtons] = useState(1)
  const [neutrons, setNeutrons] = useState(0)
  const [electrons, setElectrons] = useState(1)

  const addProton = useCallback(() => setProtons((p) => p + 1), [])
  const addNeutron = useCallback(() => setNeutrons((n) => n + 1), [])
  const addElectron = useCallback(() => setElectrons((e) => e + 1), [])

  const removeProton = useCallback(
    () => setProtons((p) => Math.max(p - 1, 0)),
    [],
  )
  const removeNeutron = useCallback(
    () => setNeutrons((n) => Math.max(n - 1, 0)),
    [],
  )
  const removeElectron = useCallback(
    () => setElectrons((e) => Math.max(e - 1, 0)),
    [],
  )

  const setAtom = useCallback((p: number, n: number, e: number) => {
    setProtons(p)
    setNeutrons(n)
    setElectrons(e)
  }, [])

  return (
    <AtomContext.Provider
      value={{
        protons,
        neutrons,
        electrons,
        setProtons,
        setNeutrons,
        setElectrons,
        addProton,
        addNeutron,
        addElectron,
        removeProton,
        removeNeutron,
        removeElectron,
        setAtom,
      }}
    >
      {children}
    </AtomContext.Provider>
  )
}
