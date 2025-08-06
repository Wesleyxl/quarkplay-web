/**
 * Estima a estabilidade de um núcleo com base na relação Nêutron/Próton (N/Z).
 *
 * @param protons O número de prótons (Z).
 * @param neutrons O número de nêutrons (N).
 * @returns Uma string descrevendo a estabilidade do núcleo.
 */
export function getHalfLife(protons: number, neutrons: number): string {
  const N = neutrons
  const Z = protons
  const halfLife = Math.round((2.5 * N) / Z)
  return `Estabilidade: ${halfLife} anos`
}
