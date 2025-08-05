import { isStable } from '../utils/isStable'
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
  const particleRadius = 12

  const positions = getNuclearPositions(
    protons,
    neutrons,
    centerX,
    centerY,
    particleRadius,
  )

  const stable = isStable(protons, neutrons)

  return (
    <g className={stable ? '' : 'unstable-vibration'}>
      {positions.map((particle, i) => {
        const key = `${particle.type}-${i}`
        return particle.type === 'proton' ? (
          <Proton
            key={key}
            x={particle.x}
            y={particle.y}
            radius={particleRadius}
            // color='#E53935' // vermelho vibrante, se quiser custom
          />
        ) : (
          <Neutron
            key={key}
            x={particle.x}
            y={particle.y}
            radius={particleRadius}
            // color='#2979FF' // azul forte, se quiser custom
          />
        )
      })}
    </g>
  )
}
