import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Emissão de nêutron: núcleo emite 1 nêutron (processo raro, geralmente em núcleos muito excitados).
 * Nêutrons: -1
 */
export function neutronEmissionDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: {
      protons: atom.protons,
      neutrons: atom.neutrons - 1,
      electrons: atom.electrons,
    },
    emitted: {
      type: 'neutron-emission',
      symbol: 'n⁰',
      charge: 0,
      mass: 0,
      electrons: 0, // emitido
    },
  }
}
