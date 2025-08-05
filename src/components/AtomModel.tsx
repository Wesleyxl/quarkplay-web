// components/AtomModel.tsx

import { AtomCore } from './AtomCore'
import { ElectronShell } from './ElectronOrbit'

function getRandom(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

interface AtomModelProps {
  protons: number
  neutrons: number
  electrons: number
}

// Capacidade máxima de elétrons para até 8 camadas
const SHELL_CAPACITIES = [2, 8, 8, 18, 18, 18, 18, 18]

export function AtomModel({ protons, neutrons, electrons }: AtomModelProps) {
  const width = 600
  const height = 500
  const centerX = width / 2
  const centerY = height / 2

  const BASE_RADIUS = 150 //
  const RADIUS_INCREMENT = 12

  const shells = []
  let electronsToPlace = electrons
  let shellIndex = 0
  const rotationTypes = [0, 45, 90, 135, 180, 225, 270, 315] // Rotação em graus para cada camada

  while (electronsToPlace > 0 && shellIndex < SHELL_CAPACITIES.length) {
    const capacity = SHELL_CAPACITIES[shellIndex]
    const electronsInThisShell = Math.min(electronsToPlace, capacity)

    // Gerando os valores aleatórios
    // const rotation = getRandom(0, 360)
    // const tilt = getRandom(25, 65)
    // const speed = getRandom(8, 20) * (1 + shellIndex * 0.1)

    const tilt = 25
    const speed = getRandom(8, 20) * (1 + shellIndex * 0.01)
    const rotation = rotationTypes[shellIndex % rotationTypes.length]

    // // Log para registrar os dados
    // console.log(`Camada ${shellIndex + 1}:
    //   Rotação: ${rotation.toFixed(2)} graus
    //   Inclinação (Tilt): ${tilt.toFixed(2)} graus
    //   Velocidade: ${speed.toFixed(2)}s
    //   Número de Elétrons: ${electronsInThisShell}`)

    shells.push({
      id: shellIndex,
      radius: BASE_RADIUS + shellIndex * RADIUS_INCREMENT,
      tilt: tilt,
      rotation: rotation,
      speed: speed + 0.1,
      electronsInShell: electronsInThisShell,
    })

    electronsToPlace -= electronsInThisShell
    shellIndex++
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {shells.map((shell) => (
        <ElectronShell
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
      />
    </svg>
  )
}
