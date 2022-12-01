import styled from 'styled-components'
import NatureMobile from '../../assets/NatureMobile.png'

const StyledDiv = styled.div`
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
        display: flex;
       align-items: center;
       justify-content: center
       background: url(${NatureMobile?.assets});
    }
      
    `}
`
const ImageStyle = styled.img`
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
const StyledText = styled.p`
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
      <StyledDiv $isImagePropos>
        <ImageStyle $isImagePropos src={image} alt="nature" />
        <StyledText>{description}</StyledText>
      </StyledDiv>
    )
  }
  return (
    <StyledDiv>
      <ImageStyle src={image} alt="nature" />
      <StyledText>{description}</StyledText>
    </StyledDiv>
  )
}

export default Banner
//Chez vous, partout et ailleurs
