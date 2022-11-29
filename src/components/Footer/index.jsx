import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logoKasaFooter.png'
import styled from 'styled-components'
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  padding-top: 66px;
  padding-bottom: 29px;
`
const StyledText = styled.p`
  color: white;
  font-size: 24px;
  margin: 0px;
  margin-top: 28.5px;
`

function Footer() {
  return (
    <NavContainer>
      <Link to="/">
        <img src={LogoFooter} alt="logo du kasa" />
      </Link>
      <div>
        <StyledText>2020 Kasa. All rights reserved</StyledText>
      </div>
    </NavContainer>
  )
}

export default Footer
