import { particlesColor } from 'styles/particlesColor'

interface ElectronProps {
  x: number
  y: number
  radius: number
}

export function Electron({ x, y, radius }: ElectronProps) {
  return <circle cx={x} cy={y} r={radius} fill={particlesColor.electron} />
}
