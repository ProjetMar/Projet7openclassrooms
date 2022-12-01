import { useParams } from 'react-router-dom'
import DataKasa from '../../Data.json'
import { useState } from 'react'
/*
function handelPreClick() {
    
    setCountPre(countPre + 1)
    updatePhotoIndice(preIndice)
    return(countPre, photoIndice)
}
  function handelNextClick() {
    setCountnext(countnext + 1)
    updatePhotoIndice(nexIndice)
    return(countnext, photoIndice)
  }
  
*/
function Logement() {
  /*const apparSelect = (value) => value.id === { useParams }
  const appart = DataKasa.filter(apparSelect).join(', ')*/
  const Id = useParams()
  console.log(Id)
  console.log(Id.id)
  console.log(DataKasa[0])
  const appartement = DataKasa.filter((appar) => appar.id === Id.id)
  console.log(appartement)
  const photos = appartement[0].pictures
  console.log(photos)
  const n = photos.length
  console.log(n)

  const [photoIndice, updatePhotoIndice] = useState(0)
  const preIndice = photoIndice === 0 ? 0 : photoIndice - 1
  const nexIndice = photoIndice === n - 1 ? n - 1 : photoIndice + 1
  console.log(preIndice)
  console.log(nexIndice)
  if (n === 1) {
    return (
      <div>
        <img src={photos[photoIndice]} alt="appartement" />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => updatePhotoIndice(preIndice)}>precedent</button>
        <button onClick={() => updatePhotoIndice(nexIndice)}>suivant</button>
        <img src={photos[photoIndice]} alt="appartement" />
      </div>
    )
  }
}
export default Logement
