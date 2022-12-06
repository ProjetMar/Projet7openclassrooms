import { useState } from 'react'
import flechLeft from '../../assets/flechLeft.png'
import flechRight from '../../assets/flechRight.png'
import styled from 'styled-components'
const SlideShowWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SlideShowPre = styled.button`
  position: absolute;
  left: 0;
  margin-left: 2%;
  background: none;
  border: none;
`
const SlideShowNext = styled.button`
  position: absolute;
  right: 0;
  margin-right: 2%;
  background: none;
  border: none;
`
const SlideShowNumber = styled.span`
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-bottom: 25px;
  color: white;
  font-size: 24px;
`
const SlideShowImg = styled.img`
  width: 1240px;
  height: 415px;
  border-radius: 25px;
  object-fit: cover;
  width: 100%;
  @media (max-width: 870px) {
    height: 255px;
  }
`
const SlideShowImgButton = styled.img`
  @media (max-width: 870px) {
    width: 30%;
  }
`

function SlideShow({ photos }) {
  const n = photos.length
  console.log(n)

  const [photoIndice, updatePhotoIndice] = useState(0)
  const preIndice = photoIndice === 0 ? n - 1 : photoIndice - 1
  const nexIndice = photoIndice === n - 1 ? 0 : photoIndice + 1
  console.log(preIndice)
  console.log(nexIndice)
  if (n === 1) {
    return (
      <div>
        <SlideShowImg src={photos[photoIndice]} alt="appartement" />
      </div>
    )
  } else {
    return (
      <SlideShowWrapper>
        <SlideShowPre onClick={() => updatePhotoIndice(preIndice)}>
          <SlideShowImgButton src={flechLeft} alt="précedent" />
        </SlideShowPre>
        <SlideShowNext onClick={() => updatePhotoIndice(nexIndice)}>
          <SlideShowImgButton src={flechRight} alt="suivant" />
        </SlideShowNext>

        <SlideShowNumber>{`${photoIndice + 1}/${n}`}</SlideShowNumber>

        <SlideShowImg src={photos[photoIndice]} alt="appartement" />
      </SlideShowWrapper>
    )
  }
}
export default SlideShow
