interface NeutronProps {
  x: number
  y: number
  radius: number
  color: string
}

export function Neutron({ x, y, radius, color }: NeutronProps) {
  return (
    <g>
      <circle cx={x} cy={y} r={radius} fill={color} />
      <text
        x={x}
        y={y}
        fill='#000' // Cor da letra
        fontSize={`${radius * 1.2}px`} // Tamanho da letra baseado no raio
        fontWeight='bold'
        textAnchor='middle' // Alinha horizontalmente o texto ao centro
        dominantBaseline='central' // Alinha verticalmente o texto ao centro
      >
        N
      </text>
    </g>
  )
}
