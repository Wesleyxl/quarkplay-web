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

  const baseSpacing = particleRadius * 2 * 0.8
  const MAX_LAYERS = 4 // Limite de camadas (índices 0 a 4)

  let particleIndex = 0

  // 1. Preenche as camadas em um layout circular até o limite de MAX_LAYERS
  for (
    let layer = 0;
    layer < MAX_LAYERS && particleIndex < totalParticles;
    layer++
  ) {
    const currentRadius = layer * baseSpacing
    const particlesInLayer =
      layer === 0
        ? 1
        : Math.max(1, Math.floor((2 * Math.PI * currentRadius) / baseSpacing))

    // Garante que não tentamos colocar mais partículas do que temos
    const particlesToPlaceInThisLayer = Math.min(
      particlesInLayer,
      totalParticles - particleIndex,
    )

    if (particlesToPlaceInThisLayer === 0) {
      break
    }

    const angleIncrement = (2 * Math.PI) / particlesToPlaceInThisLayer

    for (let i = 0; i < particlesToPlaceInThisLayer; i++) {
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
    // Removed unused maxRadius assignment
  }

  // 2. Coloca as partículas restantes de forma aleatória dentro da área do núcleo
  if (particleIndex < totalParticles) {
    const remainingParticles = particles.slice(particleIndex)

    // O raio máximo para a distribuição aleatória é o raio da última camada (índice 4)
    const maxRandomRadius = (MAX_LAYERS - 1) * baseSpacing

    for (const particleType of remainingParticles) {
      // Gera um ângulo e um raio aleatórios para a posição da partícula
      const randomAngle = Math.random() * 2 * Math.PI
      const randomRadius = Math.random() * maxRandomRadius

      const x = centerX + randomRadius * Math.cos(randomAngle)
      const y = centerY + randomRadius * Math.sin(randomAngle)

      positions.push({
        x,
        y,
        type: particleType as 'proton' | 'neutron',
      })
    }
  }

  return positions
}
