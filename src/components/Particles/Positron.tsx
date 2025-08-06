import { particlesColor } from 'styles/particlesColor'

interface PositronProps {
  x: number
  y: number
  radius: number
}

export function Positron({ x, y, radius }: PositronProps) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={particlesColor.positron}
        opacity={0.9}
        style={{
          filter: `drop-shadow(0 0 8px ${particlesColor.positron})`,
        }}
      />
      <text
        x={x}
        y={y}
        fill='#AD1457'
        fontSize={radius * 1.1}
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='central'
      >
        e⁺
      </text>
    </g>
  )
}
