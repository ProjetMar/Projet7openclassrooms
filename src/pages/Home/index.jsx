import DataKasa from '../../Data.json'
import ImageHome from '../../assets/NatureBackground.png'
import styled from 'styled-components'
import Card from '../../components/Card'

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
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  padding: 56px 50px;
  background-color: #f6f6f6;
  border-radius: 25px;
  align-content: center;
  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    background-color: white;
    padding: 0px;
  }
  @media (max-width: 1220px) and (min-width: 871px) {
    grid-template-columns: 1fr 1fr;
  }
`
const ContenairDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 43px;
  margin-right: 7%;
  margin-left: 7%;
  @media (max-width: 870px) {
    margin: 0px 20px;
  }
`
const ImageStyle = styled.img`
  width: 100%;
  @media (max-width: 870px) {
    height: 111px;
  }
`

function App() {
  console.log(DataKasa)
  return (
    <ContenairDiv>
      <StyledDiv>
        <ImageStyle src={ImageHome} alt="nature" />
        <StyledText>Chez vous, partout et ailleurs</StyledText>
      </StyledDiv>
      <CardsContainer>
        {DataKasa.map((appartement) => (
          <Card
            key={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
          />
        ))}
      </CardsContainer>
    </ContenairDiv>
  )
}

export default App
