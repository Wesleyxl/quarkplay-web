// components/ElectronShell.tsx

interface ElectronShellProps {
  shellId: number
  orbitalRadius: number
  speed: number
  centerX: number
  centerY: number
  tilt: number
  rotation: number
  electronsInShell: number // <-- Novo: quantos elétrons nesta camada
}

export function ElectronShell({
  shellId,
  orbitalRadius,
  speed,
  centerX,
  centerY,
  tilt,
  rotation,
  electronsInShell, // <-- Novo
}: ElectronShellProps) {
  const rx = orbitalRadius
  // Garantir que ry nunca seja zero ou negativo se o tilt for muito baixo
  const ry = orbitalRadius * Math.sin(Math.max(5, tilt) * (Math.PI / 180))

  const electronColor = '#FFD700'
  const orbitPathId = `orbit-path-${shellId}`
  const ellipsePathData = `M ${centerX},${centerY} m -${rx}, 0 a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 -${rx * 2},0`

  return (
    <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>
      {/* 1. O Path da órbita (desenhado apenas uma vez por camada) */}
      <path
        id={orbitPathId}
        d={ellipsePathData}
        fill='none'
        stroke='#ccc'
        strokeWidth='1'
        strokeDasharray='4,4'
      />

      {/* 2. Mapeia e renderiza cada elétron DENTRO da mesma órbita */}
      {Array.from({ length: electronsInShell }).map((_, i) => (
        <circle key={i} r='6' fill={electronColor}>
          <animateMotion
            dur={`${speed}s`}
            repeatCount='indefinite'
            rotate='auto'
            // Atrasamos o início de cada animação para espaçar os elétrons
            begin={`${-((speed * i) / electronsInShell)}s`}
          >
            <mpath href={`#${orbitPathId}`} />
          </animateMotion>
        </circle>
      ))}
    </g>
  )
}
