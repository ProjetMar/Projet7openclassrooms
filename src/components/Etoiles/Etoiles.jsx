import EtoileRougeF from '../EtoileRougeF/EtoileRougeF'
import EtoileGrisF from '../EtoileGrisF/EtoileGrisF'
import EtoileRouge from '../../assets/EtoileRouge.png'
import EtoileGris from '../../assets/EtoileGris.png'
import styled from 'styled-components'
const ConteneurDiv = styled.div`
  min-width: 150px;
`
function Etoiles({ nEtoiles }) {
  if (nEtoiles <= 5) {
    return (
      <ConteneurDiv>
        <EtoileRougeF nEtoiles={nEtoiles} EtoileRouge={EtoileRouge} />
        <EtoileGrisF nEtoilesRest={5 - nEtoiles} EtoileGris={EtoileGris} />
      </ConteneurDiv>
    )
  } else {
    return (
      <ConteneurDiv>
        <EtoileRougeF nEtoiles={nEtoiles} EtoileRouge={EtoileRouge} />
      </ConteneurDiv>
    )
  }
}
export default Etoiles
