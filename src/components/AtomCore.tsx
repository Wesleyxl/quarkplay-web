import { getNuclearPositions } from '../utils/nuclearLayout'
import { Neutron } from './Neutron'
import { Proton } from './Proton'

interface AtomCoreProps {
  protons: number
  neutrons: number
  centerX: number
  centerY: number
}

export function AtomCore({
  protons,
  neutrons,
  centerX,
  centerY,
}: AtomCoreProps) {
  const particleRadius = 12 // Define o raio das partículas
  const positions = getNuclearPositions(
    protons,
    neutrons,
    centerX,
    centerY,
    particleRadius,
  )

  return (
    <>
      {positions.map((particle, i) => {
        const key = `${particle.type}-${i}`
        const color = particle.type === 'proton' ? '#FF6B6B' : '#4DABF5'

        return particle.type === 'proton' ? (
          <Proton
            key={key}
            x={particle.x}
            y={particle.y}
            radius={particleRadius}
            color={color}
          />
        ) : (
          <Neutron
            key={key}
            x={particle.x}
            y={particle.y}
            radius={particleRadius}
            color={color}
          />
        )
      })}
    </>
  )
}
