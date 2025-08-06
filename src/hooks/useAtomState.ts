import { isStable } from 'physics/isStable'
import { useCallback, useState } from 'react'
import type { DecayType } from 'types/decayEngine'
import { applyDecay, checkDecayType } from '../logic/decayEngine'

export function useAtomState(initP: number, initN: number, initE: number) {
  const [protons, setProtons] = useState(initP)
  const [neutrons, setNeutrons] = useState(initN)
  const [electrons, setElectrons] = useState(initE)
  const [lastDecay, setLastDecay] = useState<DecayType | null>(null)
  const [emittedParticle, setEmittedParticle] = useState<any>(null)

  const tryDecay = useCallback(() => {
    const atom = { protons, neutrons, electrons }
    const decayType = checkDecayType(atom)
    if (decayType) {
      const { newAtom, emitted } = applyDecay(atom, decayType)
      setProtons(newAtom.protons)
      setNeutrons(newAtom.neutrons)
      setElectrons(newAtom.electrons)
      setLastDecay(decayType)
      setEmittedParticle(emitted)
      return { decayType, emitted }
    }
    return null
  }, [protons, neutrons, electrons])

  const clearDecay = () => setLastDecay(null)

  return {
    protons,
    neutrons,
    electrons,
    setProtons,
    setNeutrons,
    setElectrons,
    tryDecay,
    lastDecay,
    clearDecay,
    emittedParticle,
    isStable: isStable(protons, neutrons),
  }
}
