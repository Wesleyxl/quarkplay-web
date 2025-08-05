// components/ElectronShell.tsx

interface ElectronShellProps {
  shellId: number
  orbitalRadius: number
  speed: number
  centerX: number
  centerY: number
  tilt: number
  rotation: number
  electronsInShell: number
}

export function ElectronShell({
  shellId,
  orbitalRadius,
  speed,
  centerX,
  centerY,
  tilt,
  rotation,
  electronsInShell,
}: ElectronShellProps) {
  const rx = orbitalRadius
  const ry = orbitalRadius * Math.sin(Math.max(5, tilt) * (Math.PI / 180))
  const orbitPathId = `orbit-path-${shellId}`

  // Neon cyan electron
  const electronColor = '#00FFF7'

  // Glow filter id
  const filterId = `electron-glow`

  // Neon rastro (glow ellipse ao longo da órbita)
  // (opcional) só pra ficar ainda mais tecnológico
  const ellipsePathData = `M ${centerX},${centerY} m -${rx}, 0 a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 -${rx * 2},0`

  return (
    <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>
      {/* SVG Filter para glow neon */}
      <defs>
        <filter id={filterId} x='-50%' y='-50%' width='200%' height='200%'>
          <feDropShadow
            dx='0'
            dy='0'
            stdDeviation='6'
            floodColor={electronColor}
            floodOpacity='1'
          />
          <feDropShadow
            dx='0'
            dy='0'
            stdDeviation='15'
            floodColor={electronColor}
            floodOpacity='0.4'
          />
        </filter>
      </defs>

      {/* 1. Path da órbita, com leve glow */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={rx}
        ry={ry}
        fill='none'
        stroke={electronColor}
        strokeWidth={2}
        opacity={0.25}
        filter={`url(#${filterId})`}
      />

      {/* 2. "Rastro" da partícula: desenhado como blur */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={rx}
        ry={ry}
        fill='none'
        stroke={electronColor}
        strokeWidth={8}
        opacity={0.07}
        filter={`url(#${filterId})`}
      />

      {/* 3. Path da órbita por referência */}
      <path
        id={orbitPathId}
        d={ellipsePathData}
        fill='none'
        stroke='#062eb3'
        strokeWidth='1'
        strokeDasharray='4,4'
        opacity={0.5}
      />

      {/* 4. Elétrons em movimento, com glow */}
      {Array.from({ length: electronsInShell }).map((_, i) => (
        <circle
          key={i}
          r={3}
          fill={electronColor}
          filter={`url(#${filterId})`}
          opacity={0.95}
        >
          <animateMotion
            dur={`${speed}s`}
            repeatCount='indefinite'
            rotate='auto'
            begin={`${-((speed * i) / electronsInShell)}s`}
          >
            <mpath href={`#${orbitPathId}`} />
          </animateMotion>
        </circle>
      ))}
    </g>
  )
}
