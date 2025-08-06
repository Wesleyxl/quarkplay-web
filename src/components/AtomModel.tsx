import { applyDecay, checkDecayType } from 'logic/decayEngine'
import { isStable } from 'physics/isStable'
import React from 'react'
import { useAtom } from 'src/contexts/AtomContext'
import { AtomCore } from './AtomCore'
import { ElectronOrbit } from './ElectronOrbit'

function getRandom(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

interface AtomModelProps {
  protons: number
  neutrons: number
  electrons: number
}

const SHELL_CAPACITIES = [2, 8, 8, 18, 18, 18, 18, 18]

export function AtomModel({ protons, neutrons, electrons }: AtomModelProps) {
  const [stable, setStable] = React.useState(true)
  const { setProtons, setNeutrons, setElectrons } = useAtom()

  React.useEffect(() => {
    const stableNow = isStable(protons, neutrons)
    setStable(stableNow)

    if (!stableNow) {
      const decayType = checkDecayType({ protons, neutrons, electrons })
      if (!decayType) return

      // Aguarda animação de instabilidade antes de aplicar decaimento
      const timeout = setTimeout(() => {
        const result = applyDecay({ protons, neutrons, electrons }, decayType)
        setProtons(result.newAtom.protons)
        setNeutrons(result.newAtom.neutrons)
        setElectrons(result.newAtom.electrons)
        setStable(true) // volta a estável (opcional, depende do ciclo)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [protons, neutrons, electrons, setProtons, setNeutrons, setElectrons])

  // --- Seu SVG, igual estava ---
  const width = 600
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const BASE_RADIUS = 150
  const RADIUS_INCREMENT = 12

  const shells = []
  let electronsToPlace = electrons
  let shellIndex = 0
  const rotationTypes = [0, 45, 90, 135, 180, 225, 270, 315]

  while (electronsToPlace > 0 && shellIndex < SHELL_CAPACITIES.length) {
    const capacity = SHELL_CAPACITIES[shellIndex]
    const electronsInThisShell = Math.min(electronsToPlace, capacity)

    const tilt = 25
    const speed = getRandom(8, 20) * (1 + shellIndex * 0.01)
    const rotation = rotationTypes[shellIndex % rotationTypes.length]

    shells.push({
      id: shellIndex,
      radius: BASE_RADIUS + shellIndex * RADIUS_INCREMENT,
      tilt,
      rotation,
      speed: speed + 0.1,
      electronsInShell: electronsInThisShell,
    })

    electronsToPlace -= electronsInThisShell
    shellIndex++
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {shells.map((shell) => (
        <ElectronOrbit
          key={shell.id}
          shellId={shell.id}
          orbitalRadius={shell.radius}
          speed={shell.speed}
          centerX={centerX}
          centerY={centerY}
          tilt={shell.tilt}
          rotation={shell.rotation}
          electronsInShell={shell.electronsInShell}
        />
      ))}
      <AtomCore
        protons={protons}
        neutrons={neutrons}
        centerX={centerX}
        centerY={centerY}
        stable={stable}
      />
    </svg>
  )
}
