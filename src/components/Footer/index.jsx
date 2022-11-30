import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logoKasaFooter.png'
import styled from 'styled-components'
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding-top: 66px;
  padding-bottom: 29px;
  margin-top: 200px;
`
const StyledText = styled.p`
  color: white;
  font-size: 24px;
  margin: 0px;
  margin-top: 28.5px;
  @media (max-width: 870px) {
    font-size: 1rem;
  }
`

function Footer() {
  return (
    <NavContainer>
      <Link to="/">
        <img src={LogoFooter} alt="logo du kasa" />
      </Link>
      <div>
        <StyledText>© 2020 Kasa. All rights reserved</StyledText>
      </div>
    </NavContainer>
  )
}

export default Footer
