import { Antineutrino } from 'components/Particles/Antineutrino'
import { Electron } from 'components/Particles/Electron'
import { useEffect, useState } from 'react'

interface BetaMinusAnimationProps {
  centerX: number
  centerY: number
  radius?: number
  onEnd: () => void
  duration?: number
}

export function BetaMinusAnimation({
  centerX,
  centerY,
  radius = 10,
  onEnd,
  duration = 1200,
}: BetaMinusAnimationProps) {
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

  // Elétron para um lado, antineutrino para o oposto
  const angleElectron = 60 // graus
  const angleAntineutrino = angleElectron + 180
  const distance = 230 * progress

  // Elétron
  const ex = centerX + Math.cos((angleElectron * Math.PI) / 180) * distance
  const ey = centerY + Math.sin((angleElectron * Math.PI) / 180) * distance

  // Antineutrino
  const ax = centerX + Math.cos((angleAntineutrino * Math.PI) / 180) * distance
  const ay = centerY + Math.sin((angleAntineutrino * Math.PI) / 180) * distance

  return (
    <g>
      <Electron x={ex} y={ey} radius={radius} color='#00FFF7' />
      <Antineutrino x={ax} y={ay} radius={radius * 0.9} />
    </g>
  )
}
