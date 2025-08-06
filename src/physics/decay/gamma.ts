import type { AtomNumbers, DecayResult } from 'types/decayEngine'

/**
 * Decaimento gama: núcleo emite um fóton de alta energia (gama),
 * sem mudar o número de prótons, nêutrons ou elétrons.
 */
export function gammaDecay(atom: AtomNumbers): DecayResult {
  return {
    newAtom: { ...atom },
    emitted: {
      type: 'gamma',
      symbol: 'γ',
      energy: 'high', // você pode detalhar depois
    },
  }
}
