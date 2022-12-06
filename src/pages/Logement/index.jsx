import { useParams } from 'react-router-dom'
import DataKasa from '../../Data.json'
/*import { useState } from 'react'*/
import SlideShow from '../../components/SlideShow'
import Etoiles from '../../components/Etoiles/Etoiles'
import Collapse from '../../components/Collapse'
import styled from 'styled-components'
const LogementInfos = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`
const ContenairDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 43px;
  /*max-width: 1240px;*/
  /* margin: auto;*/
`
const LogementTitle = styled.h1`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
  @media (max-width: 870px) {
    font-size: 1.5rem;
  }
`
const LogementLocation = styled.p`
  color: #ff6060;
  font-size: 18px;
  margin: 5px;
  @media (max-width: 870px) {
    font-size: 1.16rem;
  }
`
const LogementListeTag = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0px;
  @media (max-width: 870px) {
    flex-wrap: wrap;
  }
`
const Logementag = styled.li`
  padding: 6px 41px 5px 40px;
  color: white;
  background: #ff6060;
  border-radius: 10px;
  margin-left: 10px;
  @media (max-width: 870px) {
    font-size: 0.83rem;
    margin-top: 5px;
  }
`
const LogementPersonne = styled.div`
  display: flex;
  justify-content: flex-end;
`
const LogementPersonneImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`
const LogementPersonneName = styled.p`
  width: min-content;
  color: #ff6060;
  margin-right: 10px;
  @media (max-width: 870px) {
    font-size: 1rem;
  }
`
const CollapseDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 76px;
  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
`
const UlStyle = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
const ConteneurDiv = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`
const GlobalDiv = styled.div`
  @media (max-width: 870px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: 16px;
  }
`
function Logement() {
  const Id = useParams()
  console.log(Id)
  console.log(Id.id)
  console.log(DataKasa[0])
  const appartement = DataKasa.filter((appar) => appar.id === Id.id)
  console.log(appartement)
  const photos = appartement[0].pictures
  console.log(photos)
  const nEtoiles = appartement[0].rating
  return (
    <ConteneurDiv>
      <SlideShow photos={photos} />
      <ContenairDiv>
        <LogementInfos>
          <div>
            <LogementTitle>{appartement[0].title}</LogementTitle>
            <LogementLocation>{appartement[0].location}</LogementLocation>
            <LogementListeTag>
              {appartement[0].tags.map((tag) => (
                <Logementag key={tag}>{tag}</Logementag>
              ))}
            </LogementListeTag>
          </div>
          <GlobalDiv>
            <LogementPersonne>
              <LogementPersonneName>
                {appartement[0].host.name}
              </LogementPersonneName>
              <LogementPersonneImg
                src={appartement[0].host.picture}
                alt="face"
              />
            </LogementPersonne>
            <Etoiles nEtoiles={nEtoiles} />
          </GlobalDiv>
        </LogementInfos>
        <CollapseDiv>
          <Collapse
            name={'Description'}
            description={appartement[0].description}
          />
          <Collapse
            name={'Equipements'}
            description={
              <UlStyle>
                {appartement[0].equipments.map((equ) => (
                  <li key={equ}>{equ}</li>
                ))}
              </UlStyle>
            }
          />
        </CollapseDiv>
      </ContenairDiv>
    </ConteneurDiv>
  )
}
export default Logement
