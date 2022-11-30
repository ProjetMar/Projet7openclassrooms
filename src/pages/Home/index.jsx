import DataKasa from '../../Data.json'
import ImageHome from '../../assets/NatureBackground.png'
import styled from 'styled-components'
import Card from '../../components/Card'
import Banner from '../../components/banner'

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

function App() {
  console.log(DataKasa)
  return (
    <ContenairDiv>
      <Banner
        image={ImageHome}
        description={'Chez vous, partout et ailleurs'}
        isPropsPage={false}
      />
      <CardsContainer>
        {DataKasa.map((appartement) => (
          <Card
            key={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
            id={appartement.id}
          />
        ))}
      </CardsContainer>
    </ContenairDiv>
  )
}

export default App
