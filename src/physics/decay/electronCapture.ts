import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Captura eletrônica: núcleo captura um elétron da eletrosfera e transforma um próton em nêutron.
 * Prótons: -1 | Nêutrons: +1 | Elétrons: -1 (capturado)
 */
export function electronCaptureDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons - 1,
      neutrons: atom.neutrons + 1,
      electrons: atom.electrons - 1, // geralmente 1, para manter neutralidade
    },
    emitted: {
      type: 'electron-capture',
      symbol: 'EC',
      charge: 1,
      mass: 0,
      electrons: -1, // capturado
    },
  }
}
