interface NeutronProps {
  x: number
  y: number
  radius: number
  color?: string
}

export function Neutron({ x, y, radius, color = '#2979FF' }: NeutronProps) {
  // Glow cinza-azulado só pra dar aquele charme neutro
  const glowColor = '#2979FF'
  const glowIntensity = '0 0 10px'
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={color}
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
