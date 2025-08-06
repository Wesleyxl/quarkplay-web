import { particlesColor } from 'styles/particlesColor'

interface ProtonProps {
  x: number
  y: number
  radius: number
}

export function Proton({ x, y, radius }: ProtonProps) {
  // Para um efeito glow mais garantido cross-browser, use filter SVG, mas no React pode tentar o CSS drop-shadow.
  // Vou deixar ambos, com prioridade pro CSS (simples e rápido)
  const glowColor = particlesColor.proton
  const glowIntensity = '0 0 10px'

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={particlesColor.proton}
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
        dominantBaseline='central'
      >
        P
      </text>
    </g>
  )
}
