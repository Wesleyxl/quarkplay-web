// src/utils/isStable.ts

/**
 * Função empírica para determinar se um núcleo é estável
 * Simplificado: N ≈ Z para leves, N ≈ 1.3*Z para pesados
 */
export function isStable(protons: number, neutrons: number): boolean {
  // Isótopos mega estáveis clássicos
  if (protons === 1 && neutrons === 0) return true // Hidrogênio-1
  if (protons === 1 && neutrons === 1) return true // Deutério
  if (protons === 2 && neutrons === 2) return true // Hélio-4

  // Elementos leves (Z <= 20)
  if (protons <= 20) {
    return Math.abs(neutrons - protons) <= 1
  }

  // Elementos mais pesados (aproximação)
  const idealNeutrons = Math.round(1.3 * protons)
  return Math.abs(neutrons - idealNeutrons) <= 2
}
