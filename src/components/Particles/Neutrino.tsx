import { particlesColor } from 'styles/particlesColor'

interface NeutrinoProps {
  x: number
  y: number
  radius: number
}

export function Neutrino({ x, y, radius }: NeutrinoProps) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={particlesColor.neutrino}
        opacity={0.7}
        style={{
          filter: `blur(1px) drop-shadow(0 0 6px ${particlesColor.neutrino}})`,
        }}
      />
      <text
        x={x}
        y={y}
        fill='#1B5E20'
        fontSize={radius * 1.1}
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='central'
      >
        ν
      </text>
    </g>
  )
}
