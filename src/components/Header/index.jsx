import { Link } from 'react-router-dom'
import Logo from '../../assets/logoKasa.png'
import styled from 'styled-components'
const NavContainer = styled.nav`
  padding: 40px 7% 63px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 870px) {
    padding: 20px 20px;
  }
`
const ElementLink = styled(Link)`
  color: #ff6060;
  font-size: 24px;
  text-decoration: none;
  @media (max-width: 870px) {
    font-size: 1rem;
    text-transform: uppercase;
  }
  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.$isFullLink &&
    `padding-right : 57px; @media (max-width: 870px) {
    padding-right: 10px;
  }
  `}
`
const ElementImg = styled.img`
  @media (max-width: 870px) {
    width: 145px;
    heigth: 38px;
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <ElementImg src={Logo} alt="logo du kasa" />
      </Link>
      <div>
        <ElementLink to="/" $isFullLink>
          Accueil
        </ElementLink>
        <ElementLink to="/pages/Propos">A propos</ElementLink>
      </div>
    </NavContainer>
  )
}

export default Header
