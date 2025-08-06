export interface AtomNumbers {
  protons: number
  neutrons: number
  electrons: number
}

export interface EmittedParticle {
  type: string
  protons: number
  neutrons: number
  electrons: number
  symbol: string
  mass: number
  charge: number
}

export type DecayType =
  | 'alpha'
  | 'beta-'
  | 'beta+'
  | 'gamma'
  | 'electron-capture'
  | 'proton-emission'
  | 'neutron-emission'
  | 'spontaneous-fission'
  | null

export interface DecayResult {
  newAtom: AtomNumbers
  emitted: any
}
