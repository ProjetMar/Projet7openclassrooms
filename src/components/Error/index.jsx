import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ErrorPic from '../../assets/404.png'
const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.p`
  color: #ff6060;
  font-size: 36px;
  margin: 0px;
  @media (max-width: 870px) {
    font-size: 1.5rem;
    text-align: center;
    margin-right: 14.5%;
    margin-left: 14.5%;
  }
`
const StyledLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  text-decoration: none;
  margin-top: 182px;
  &:hover {
    text-decoration: underline;
  }
`
const StyledImg = styled.img`
  margin-top: 106px;
  margin-bottom: 66px;
  @media (max-width: 870px) {
    height: 99px;
    margin-top: 198px;
    margin-bottom: 11px;
  }
`

function Error() {
  return (
    <StyledError>
      <StyledImg src={ErrorPic} alt="404 " />
      <StyledText>oups! La page que vous demandez n'existe pas.</StyledText>
      <StyledLink to="/">Retourner vers la page d'acceuil</StyledLink>
    </StyledError>
  )
}
export default Error
