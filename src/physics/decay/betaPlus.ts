import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Decaimento beta+: um próton vira um nêutron e emite um pósitron (beta+) e um neutrino.
 * Prótons: -1 | Nêutrons: +1 | Elétrons: -1 (pósitron emitido)
 */
export function betaPlusDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons - 1,
      neutrons: atom.neutrons + 1,
      electrons: atom.electrons - 1, // geralmente 1, para manter neutralidade
    },
    emitted: {
      type: 'beta+',
      symbol: 'β⁺',
      charge: 1,
      mass: 0,
      electrons: -1, // emitido
    },
  }
}
