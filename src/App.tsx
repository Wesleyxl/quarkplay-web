import React from 'react'
import { showAtomName } from 'utils/name'
import { AtomModel } from './components/AtomModel'

const App: React.FC = () => {
  const [protons, setProtons] = React.useState(1)
  const [neutrons, setNeutrons] = React.useState(0)
  const [electrons, setElectrons] = React.useState(1)
  const [atomName, setAtomName] = React.useState('Hidrogênio')

  const handleAdd = (type: string): void => {
    switch (type) {
      case 'proton':
        setProtons(protons + 1)
        break
      case 'neutron':
        setNeutrons(neutrons + 1)
        break
      case 'electron':
        setElectrons(electrons + 1)
        break
      default:
        break
    }
  }

  const handleRemove = (type: string): void => {
    switch (type) {
      case 'proton':
        if (protons > 0) {
          setProtons(protons - 1)
        } else {
          setProtons(0)
        }
        break
      case 'neutron':
        if (neutrons > 0) {
          setNeutrons(neutrons - 1)
        } else {
          setNeutrons(0)
        }

        break
      case 'electron':
        if (electrons > 0) {
          setElectrons(electrons - 1)
        } else {
          setElectrons(0)
        }
        break
      default:
        break
    }
  }

  React.useEffect(() => {
    setAtomName(showAtomName(protons))
  }, [protons])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
      }}
    >
      <h1 style={{ color: '#333' }}>
        Modelo Atômico Interativo - {atomName}{' '}
        <span style={{ fontSize: 12, position: 'relative', top: -10 }}>
          {protons + neutrons}
        </span>
      </h1>
      <p style={{ color: '#555', fontSize: '18px' }}>
        Protons: {protons}, Neutrons: {neutrons}, Eletrons: {electrons}
      </p>

      <div
        style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#000',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <AtomModel
          protons={protons}
          neutrons={neutrons}
          electrons={electrons}
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={() => handleAdd('proton')}>+ Próton</button>
          <button onClick={() => handleRemove('proton')}>- Próton</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={() => handleAdd('neutron')}>+ Nêutron</button>
          <button onClick={() => handleRemove('neutron')}>- Nêutron</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={() => handleAdd('electron')}>+ Elétron</button>
          <button onClick={() => handleRemove('electron')}>- Elétron</button>
        </div>
      </div>
    </div>
  )
}

export default App
