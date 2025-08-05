export interface ProtonStatus {
  unstable?: boolean
  highlighted?: boolean
  selected?: boolean
}

export interface ProtonProps extends ProtonStatus {
  id?: string
  x: number
  y: number
  radius?: number
  mass?: number // default: 1.6726e-27 (kg)
  charge?: number // default: +1
  spin?: number // default: 1/2
  color?: string // para customization
}
