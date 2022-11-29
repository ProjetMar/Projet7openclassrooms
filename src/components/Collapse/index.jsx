import { useState } from 'react'
import flechBas from '../../assets/flechBas.png'
import flechHaut from '../../assets/flechHaut.png'

function Collapse({ name, description }) {
  const [isOpen, setIsOpen] = useState(true)
  return isOpen ? (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setIsOpen(false)}>
        <img src={flechBas} alt="fleche pour montrer plus d information" />
      </button>
    </div>
  ) : (
    <div>
      <div>
        <h1>{name}</h1>
        <button onClick={() => setIsOpen(true)}>
          <img src={flechHaut} alt="fleche pour montrer plus d information" />
        </button>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default Collapse
