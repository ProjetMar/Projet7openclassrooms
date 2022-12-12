import styled from 'styled-components'

const ConteneurDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 43px;

  @media (max-width: 870px) {
    padding-bottom: 22px;
    width: 100%;
  }
  ${(props) =>
    props.$isImagePropos &&
    `
    margin-right : 7%;
    margin-left: 7%;
    @media (max-width: 870px) {
        margin: 0px 5%;
        width: 90%;
    }   
    `}
`
const ElementImg = styled.img`
  width: 100%;
  @media (max-width: 870px) {
    height: 111px;
  }
  ${(props) =>
    props.$isImagePropos &&
    `@media (max-width: 870px) {
        height: 223px;
   }`}
`
const ElementP = styled.p`
  position: absolute;
  color: white;
  font-size: 48px;
  @media (max-width: 870px) {
    font-size: 2rem;
    left: 16px;
  }
`

function Banner({ image, description, isPropsPage }) {
  if (isPropsPage) {
    return (
      <ConteneurDiv $isImagePropos>
        <ElementImg $isImagePropos src={image} alt="nature" />
        <ElementP>{description}</ElementP>
      </ConteneurDiv>
    )
  }
  return (
    <ConteneurDiv>
      <ElementImg src={image} alt="nature" />
      <ElementP>{description}</ElementP>
    </ConteneurDiv>
  )
}

export default Banner
