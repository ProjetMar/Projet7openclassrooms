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
