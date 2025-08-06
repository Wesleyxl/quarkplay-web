import { particlesColor } from 'styles/particlesColor'

interface AntineutrinoProps {
  x: number
  y: number
  radius: number
}

export function Antineutrino({ x, y, radius }: AntineutrinoProps) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={particlesColor.antineutrino}
        opacity={0.7}
        style={{
          filter: `blur(1px) drop-shadow(0 0 6px ${particlesColor.antineutrino})`,
        }}
      />
      <text
        x={x}
        y={y}
        fill='#01579B'
        fontSize={radius * 1.1}
        fontWeight='bold'
        textAnchor='middle'
        dominantBaseline='central'
      >
        ν̅
      </text>
    </g>
  )
}
