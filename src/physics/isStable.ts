const STABLE_ISOTOPES: Record<number, number[]> = {
  // Z=1-9
  1: [0, 1], // Hidrogênio - Hydrogen
  2: [1, 2], // Hélio - Helium
  3: [3, 4], // Lítio - Lithium
  4: [5], // Berílio - Beryllium
  5: [5, 6], // Boro - Boron
  6: [6, 7], // Carbono - Carbon
  7: [7, 8], // Nitrogênio - Nitrogen
  8: [8, 9, 10], // Oxigênio - Oxygen
  9: [10], // Flúor - Fluorine

  // Z=10-19
  10: [10, 11, 12], // Neônio - Neon
  11: [12], // Sódio - Sodium
  12: [12, 13, 14], // Magnésio - Magnesium
  13: [14], // Alumínio - Aluminum
  14: [14, 15, 16], // Silício - Silicon
  15: [16], // Fosforo - Phosphorus
  16: [16, 17, 18, 20], // Enxofre - Sulfur
  17: [18, 20], // Cloro - Chlorine
  18: [20, 22], // Argônio - Argon
  19: [20, 22], // Potássio - Potassium

  // Z=20-29
  20: [20, 22, 23, 24, 26, 28], // Cálcio - Calcium
  21: [24, 25, 26], // Escândio - Scandium
  22: [24, 25, 26, 27, 28], // Titânio - Titanium
  23: [28], // Vanádio - Vanadium
  24: [28, 29, 30], // Crômio - Chromium
  25: [30], // Manganês - Manganese
  26: [28, 30, 31, 32, 33, 34], // Ferro - Iron
  27: [32, 33], // Cobalto - Cobalt
  28: [30, 32, 34], // Níquel - Nickel
  29: [34, 36, 38], // Cobre - Copper

  // Z=30-39
  30: [34, 36, 37, 38, 40], // Zinco - Zinc
  31: [38, 40], // Gálio - Gallium
  32: [40, 41, 42, 44], // Germânio - Germanium
  33: [42], // Arsênio - Arsenic
  34: [40, 42, 44, 45, 46], // Selênio - Selenium
  35: [44], // Bromo - Bromine
  36: [44, 46, 48, 50, 52], // Criptônio - Krypton
  37: [48], // Rubídio - Rubidium
  38: [48, 49, 50, 52], // Estrôncio - Strontium
  39: [50], // Ítrio - Yttrium

  // Z=40-49
  40: [50, 51, 52, 54, 56, 58], // Zircônio - Zirconium
  41: [52], // Nióbio - Niobium
  42: [52, 54, 55, 56, 57, 58], // Molibdênio - Molybdenum
  44: [54, 56, 57, 58, 60], // Rutênio - Ruthenium
  45: [58], // Ródio - Rhodium
  46: [58, 60, 62, 63, 64, 66], // Paládio - Palladium
  47: [60, 62], // Prata - Silver
  48: [62, 64, 66, 68], // Cádmio - Cadmium
  49: [64, 66], // Índio - Indium

  // Z=50-59
  50: [62, 64, 66, 68, 69, 70, 72], // Estanho - Tin
  51: [68, 70], // Antimônio - Antimony
  52: [70, 72, 74, 76], // Telúrio - Tellurium
  53: [74], // Iodo - Iodine
  54: [74, 75, 76, 77, 78, 80], // Xenônio - Xenon
  55: [78], // Césio - Cesium
  56: [78, 80, 81, 82], // Bário - Barium
  57: [82], // Lantânio - Lanthanum
  58: [80, 81, 82], // Cério - Cerium
  59: [82], // Praseodímio - Praseodymium

  // Z=60-69
  60: [82, 84, 86, 88], // Neodímio - Neodymium
  62: [82, 84, 85, 86, 88, 90], // Samário - Samarium
  63: [88, 90], // Európio - Europium
  64: [88, 90, 91, 92, 94], // Gadolínio - Gadolinium
  65: [94], // Térbio - Terbium
  66: [90, 92, 94, 96, 98], // Disprósio - Dysprosium
  67: [98], // Hólmio - Holmium
  68: [90, 92, 94, 96, 98, 100], // Érbio - Erbium
  69: [100], // Túlio - Thulium

  // Z=70-79
  70: [98, 100, 102, 104, 106, 108], // Itérbio - Ytterbium
  71: [104], // Lutécio - Lutetium
  72: [104, 106, 107, 108, 110], // Háfnio - Hafnium
  73: [107], // Tântalo - Tantalum
  74: [106, 108, 109, 110], // Tungstênio - Tungsten
  75: [110], // Rênio - Rhenium
  76: [110, 112, 114, 115, 116], // Ósmio - Osmium
  77: [114], // Irídio - Iridium
  78: [114, 116, 118, 119, 120, 122], // Platina - Platinum
  79: [116, 118], // Ouro - Gold

  // Z=80-83
  80: [118, 120, 122, 124], // Mercúrio - Mercury
  81: [120, 122, 123, 124], // Tálio - Thallium
  82: [122, 124, 125, 126], // Chumbo - Lead
  83: [126], // Bismuto - Bismuth
}

export function isStable(protons: number, neutrons: number): boolean {
  if (protons < 1) return false
  if (protons > 83) return false // Após bismuto

  // Checa tabela de isótopos estáveis para alguns elementos-chave
  if (STABLE_ISOTOPES[protons]) {
    return STABLE_ISOTOPES[protons].includes(neutrons)
  }

  // Elementos superleves
  if (protons === 1) return neutrons === 0 || neutrons === 1
  if (protons === 2) return neutrons === 1 || neutrons === 2

  // Linha da estabilidade aproximada
  let minIdealRatio, maxIdealRatio

  if (protons <= 20) {
    minIdealRatio = 0.9
    maxIdealRatio = 1.2
  } else if (protons <= 40) {
    minIdealRatio = 1.2
    maxIdealRatio = 1.35
  } else if (protons <= 60) {
    minIdealRatio = 1.3
    maxIdealRatio = 1.45
  } else if (protons <= 82) {
    minIdealRatio = 1.4
    maxIdealRatio = 1.6
  } else {
    return false
  }

  const ratio = neutrons / protons
  return ratio >= minIdealRatio && ratio <= maxIdealRatio
}
