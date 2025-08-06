import type { AtomNumbers, DecayResult } from 'types/decayEngine'
/**
 * Fissão espontânea: núcleo divide-se em dois e emite nêutrons.
 * Didático: divide prótons e nêutrons ao meio, emite 2 nêutrons.
 */
export function spontaneousFission(atom: AtomNumbers): DecayResult {
  const halfProtons = Math.floor(atom.protons / 2)
  const halfNeutrons = Math.floor(atom.neutrons / 2)
  const remainderProtons = atom.protons - halfProtons
  const remainderNeutrons = atom.neutrons - halfNeutrons

  // Supondo o núcleo "filho" principal como novo estado
  return {
    newAtom: {
      protons: halfProtons,
      neutrons: halfNeutrons,
      electrons: Math.max(halfProtons, 0), // mantém carga neutra (ajuste didático)
    },
    emitted: {
      type: 'spontaneous-fission',
      fragments: [
        {
          protons: remainderProtons,
          neutrons: remainderNeutrons,
          electrons: Math.max(remainderProtons, 0),
        },
      ],
      neutrons: 2, // geralmente de 2 a 4 nêutrons emitidos
    },
  }
}
