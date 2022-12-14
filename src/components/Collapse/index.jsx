import { useState } from 'react'
import flechBas from '../../assets/flechBas.png'
import flechHaut from '../../assets/flechHaut.png'
import styled from 'styled-components'

const ConteneurTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;
  margin-bottom: 31px;
  /*margin: 31px 14.5%;*/
  /*padding: 5px 16px 5px 18px;*/
  background-color: #ff6060;
  color: white;
  font-size: 24px;
  border-radius: 10px;
  height: 52px;
  padding-right: 5px;
  padding-left: 5px;
  margin-top: 0px;
  /*@media (max-width: 870px) {
    margin: 20px 20px;
  }*/
  ${(props) =>
    props.$isdescription &&
    `
    min-height: 52px;
    margin-bottom : 0px;
    margin-top: 0px;
    @media (max-width: 870px) {
        margin-bottom: 0px;
        margin-top: 0px;
      }
    `}
`
const ElementButton = styled.button`
  background-color: #ff6060;
  border: none;
`
const ElementP = styled.p`
  margin: 0px;
  height: 34px;
  display: flex;
  align-items: center;
  @media (max-width: 870px) {
    font-size: 1.1rem;
  }
`
const ConteneurDescriptionDiv = styled.div`
  /*margin-right: 14.5%;*/
  /*margin-left: 14.5%;*/
  margin-bottom: 20px;
  height: 100%;
  padding: 27px 27px 19px 18px;
  color: black;
  background-color: #f7f7f7;
  font-size: 24px;
  line-height: 142.6%;
  color: #ff6060;
  font-weight: 400;
  line-height: 34.22px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 870px) {
    /*margin: 0px 20px;*/
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 142.6%;
  }
`
const ConteneurOpenDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  @media (max-width: 870px) {
    margin: 0px;
  }
`
const ElementDescriptionP = styled.p`
  margin: 0px;
`

function Collapse({ name, description }) {
  const [isClosed, setIsClosed] = useState(true)
  return isClosed ? (
    <ConteneurTitleDiv>
      <ElementP>{name}</ElementP>
      <ElementButton onClick={() => setIsClosed(false)}>
        <img src={flechBas} alt="fleche pour montrer plus d information" />
      </ElementButton>
    </ConteneurTitleDiv>
  ) : (
    <ConteneurOpenDiv>
      <ConteneurTitleDiv $isdescription>
        <ElementP>{name}</ElementP>
        <ElementButton onClick={() => setIsClosed(true)}>
          <img src={flechHaut} alt="fleche pour montrer plus d information" />
        </ElementButton>
      </ConteneurTitleDiv>
      <ConteneurDescriptionDiv>
        <ElementDescriptionP>{description}</ElementDescriptionP>
      </ConteneurDescriptionDiv>
    </ConteneurOpenDiv>
  )
}
export default Collapse
