import { alphaDecay } from 'physics/decay/alpha'
import { betaMinusDecay } from 'physics/decay/betaMinus'
import { betaPlusDecay } from 'physics/decay/betaPlus'
import { electronCaptureDecay } from 'physics/decay/electronCapture'
import { gammaDecay } from 'physics/decay/gamma'
import { neutronEmissionDecay } from 'physics/decay/neutronEmission'
import { protonEmissionDecay } from 'physics/decay/protonEmission'
import { spontaneousFission } from 'physics/decay/spontaneousFission'
import { isStable } from 'physics/isStable'
import type { AtomNumbers, DecayResult, DecayType } from 'types/decayEngine'

/**
 * Decide qual tipo de decaimento ocorre.
 * (Versão aprimorada e didática)
 */
export function checkDecayType(atom: AtomNumbers): DecayType {
  const protons = atom.protons
  const neutrons = atom.neutrons
  const Z = protons
  const N = neutrons

  // 1. Estável, não decai.
  if (isStable(Z, N)) return null

  // 2. Elementos muito pesados (Z > 83)
  if (Z >= 83 && N >= Z) return 'alpha'

  // 3. Núcleos massivos (Z > 92 e N > 140)
  if (Z > 92 && N > 140) return 'spontaneous-fission'

  // 4. Excesso de nêutrons: Beta-
  const idealRatio = Z <= 20 ? 1 : 1.5
  if (N / Z > idealRatio) return 'beta-'

  // 5. Excesso de prótons: Beta+
  if (N / Z < idealRatio) return 'beta+'

  // 6. Estado excitado (fallback): Gama
  return 'gamma'
}

/**
 * Executa o decaimento, retornando novo átomo e partículas emitidas
 */
export function applyDecay(
  atom: AtomNumbers,
  decayType: DecayType,
): DecayResult {
  switch (decayType) {
    case 'alpha':
      return alphaDecay(atom)
    case 'beta-':
      return betaMinusDecay(atom)
    case 'beta+':
      return betaPlusDecay(atom)
    case 'gamma':
      return gammaDecay(atom)
    case 'electron-capture':
      return electronCaptureDecay(atom)
    case 'proton-emission':
      return protonEmissionDecay(atom)
    case 'neutron-emission':
      return neutronEmissionDecay(atom)
    case 'spontaneous-fission':
      return spontaneousFission(atom)
    default:
      return { newAtom: atom, emitted: null }
  }
}
