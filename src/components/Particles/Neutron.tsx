import { particlesColor } from 'styles/particlesColor'

interface NeutronProps {
  x: number
  y: number
  radius: number
}

export function Neutron({ x, y, radius }: NeutronProps) {
  // Glow cinza-azulado só pra dar aquele charme neutro
  const glowColor = particlesColor.neutron
  const glowIntensity = '0 0 10px'
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={particlesColor.neutron}
        style={{
          filter: `drop-shadow(${glowIntensity} ${glowColor})`,
        }}
      />
      <text
        x={x}
        y={y}
        fill='#000'
        fontSize={radius * 1.2}
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        N
      </text>
    </g>
  )
}
