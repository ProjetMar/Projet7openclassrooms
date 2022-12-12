import EtoileC from '../../components/EtoileC'
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
        <EtoileC nEtoiles={nEtoiles} EtoileC={EtoileRouge} />
        <EtoileC nEtoiles={5 - nEtoiles} EtoileC={EtoileGris} />
      </ConteneurDiv>
    )
  } else {
    return (
      <ConteneurDiv>
        <EtoileC nEtoiles={nEtoiles} EtoileC={EtoileRouge} />
      </ConteneurDiv>
    )
  }
}
export default Etoiles
