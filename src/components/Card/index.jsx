import styled from 'styled-components'
import { Link } from 'react-router-dom'
const CardWrapperLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CardImage = styled.img`
  border-radius: 10px;
  width: 340px;
  height: 340px;
  @media (max-width: 870px) {
    width: 100%;
  }
`
const CardTitle = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 300px;
  height: 52px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 10px;
  padding: 268px 20px 20px 20px;
  color: white;
  font-size: 18px;
  @media (max-width: 870px) {
    width: calc(100% - 20px);
    padding-right: 0px;
  }
`
function Card({ title, cover, id }) {
  return (
    <CardWrapperLink to={`pages/Logement/${id}`}>
      <CardImage src={cover} alt="appartement" />
      <CardTitle>{title}</CardTitle>
    </CardWrapperLink>
  )
}
export default Card
