import { checkDecayType } from 'logic/decayEngine'
import React from 'react'
import { showAtomName } from 'utils/name'
import { AtomModel } from './components/AtomModel'
import { useAtom } from './contexts/AtomContext'

const App: React.FC = () => {
  const {
    protons,
    neutrons,
    electrons,
    addProton,
    addNeutron,
    addElectron,
    removeProton,
    removeNeutron,
    removeElectron,
  } = useAtom()
  const [atomName, setAtomName] = React.useState('Hidrogênio')

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
        backgroundColor: '#343434',
        padding: '20px',
      }}
    >
      <h1 style={{ color: '#fff' }}>
        Modelo Atômico Interativo - {atomName}-{' '}
        <span
          style={{
            fontSize: 12,
            position: 'relative',
            top: -10,
            marginRight: 5,
          }}
        >
          {protons + neutrons}
        </span>
        {checkDecayType({ protons, neutrons, electrons }) || 'Estavel'}
      </h1>
      <p style={{ color: '#fff', fontSize: '18px' }}>
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
          <button onClick={addProton}>+ Próton</button>
          <button onClick={removeProton}>- Próton</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={addNeutron}>+ Nêutron</button>
          <button onClick={removeNeutron}>- Nêutron</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <button onClick={addElectron}>+ Elétron</button>
          <button onClick={removeElectron}>- Elétron</button>
        </div>
      </div>
    </div>
  )
}

export default App
