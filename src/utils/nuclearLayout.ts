import { shuffleArray } from './shuffleArray'

interface ParticlePosition {
  x: number
  y: number
  type: 'proton' | 'neutron'
}

export function getNuclearPositions(
  protons: number,
  neutrons: number,
  centerX: number,
  centerY: number,
  particleRadius: number,
): ParticlePosition[] {
  const positions: ParticlePosition[] = []
  const totalParticles = protons + neutrons
  const particles = Array(protons)
    .fill('proton')
    .concat(Array(neutrons).fill('neutron'))
  shuffleArray(particles)

  if (totalParticles === 0) return []
  if (totalParticles === 1) {
    return [
      { x: centerX, y: centerY, type: particles[0] as 'proton' | 'neutron' },
    ]
  }

  const baseSpacing = particleRadius * 2 * 0.8 // Espaçamento para empacotamento compacto

  // Define um layout em camadas circulares
  let particleIndex = 0
  let currentRadius = 0
  let layer = 0

  while (particleIndex < totalParticles) {
    const particlesInLayer =
      layer === 0
        ? 1
        : Math.max(1, Math.floor((2 * Math.PI * currentRadius) / baseSpacing))
    const angleIncrement = (2 * Math.PI) / particlesInLayer

    for (
      let i = 0;
      i < particlesInLayer && particleIndex < totalParticles;
      i++
    ) {
      const angle = i * angleIncrement
      const x = centerX + currentRadius * Math.cos(angle)
      const y = centerY + currentRadius * Math.sin(angle)
      positions.push({
        x,
        y,
        type: particles[particleIndex] as 'proton' | 'neutron',
      })
      particleIndex++
    }

    layer++
    currentRadius = layer * baseSpacing * 0.8 // Ajusta o raio da próxima camada
  }

  return positions
}
