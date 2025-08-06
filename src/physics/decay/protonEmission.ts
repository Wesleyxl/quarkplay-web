import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Emissão de próton: núcleo emite 1 próton (raro em nuclídeos ricos em prótons).
 * Prótons: -1 | Elétrons: -1 (em geral, para manter neutralidade)
 */
export function protonEmissionDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons - 1,
      neutrons: atom.neutrons,
      electrons: atom.electrons - 1, // geralmente 1, para manter neutralidade
    },
    emitted: {
      type: 'proton-emission',
      symbol: 'p⁰',
      charge: 1,
      mass: 0,
      electrons: -1, // emitido
    },
  }
}
