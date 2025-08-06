import { Neutron } from 'components/Particles/Neutron'
import { Proton } from 'components/Particles/Proton'
import { useEffect, useState } from 'react'

interface AlphaAnimationProps {
  centerX: number
  centerY: number
  radius?: number
  onEnd: () => void
  duration?: number // ms
}

export function AlphaAnimation({
  centerX,
  centerY,
  radius = 12,
  onEnd,
  duration = 1200,
}: AlphaAnimationProps) {
  // Estado local para animar a distância da partícula
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    function animate(now: number) {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      setProgress(t)
      if (t < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        onEnd()
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [duration, onEnd])

  // Quatro ângulos para os "produtos" da radiação alfa
  const angles = [20, 70, 110, 160] // graus
  const distance = 200 * progress // até 200 px para fora

  return (
    <g>
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x = centerX + Math.cos(rad) * distance
        const y = centerY + Math.sin(rad) * distance
        // Dois prótons, dois nêutrons (alternando)
        return i % 2 === 0 ? (
          <Proton key={`p-${i}`} x={x} y={y} radius={radius} color='#FF4D4D' />
        ) : (
          <Neutron key={`n-${i}`} x={x} y={y} radius={radius} color='#4D8CFF' />
        )
      })}
    </g>
  )
}
