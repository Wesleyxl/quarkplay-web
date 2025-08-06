import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Decaimento beta-: um nêutron vira um próton e emite um elétron (beta-) e um antineutrino (não simulamos aqui).
 * Prótons: +1 | Nêutrons: -1 | Elétrons: +1 (emissão)
 */
export function betaMinusDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons + 1,
      neutrons: atom.neutrons - 1,
      electrons: atom.electrons + 1, // geralmente 1, para manter neutralidade
    },
    emitted: {
      type: 'beta-',
      symbol: 'β⁻',
      charge: -1,
      mass: 0,
      electrons: 1, // emitido
    },
  }
}
