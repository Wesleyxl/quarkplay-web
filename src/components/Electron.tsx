interface ElectronProps {
  x: number
  y: number
  radius: number
  color: string
}

export function Electron({ x, y, radius, color }: ElectronProps) {
  return <circle cx={x} cy={y} r={radius} fill={color} />
}
