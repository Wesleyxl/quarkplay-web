import type { AtomNumbers, DecayResult } from 'types/decayEngine'

export function alphaDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons - 2,
      neutrons: atom.neutrons - 2,
      electrons: atom.electrons - 2, // geralmente 2, para manter neutralidade
    },
    emitted: {
      type: 'alpha',
      protons: 2,
      neutrons: 2,
      electrons: 2,
      symbol: 'He',
    },
  }
}
