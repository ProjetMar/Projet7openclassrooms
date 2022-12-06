import React from 'react'
function EtoileGrisF({ nEtoilesRest, EtoileGris }) {
  let etoileG = []
  for (let i = 0; i < nEtoilesRest; i++) {
    etoileG.push(<img key={i} src={EtoileGris} alt="etoile gris" />)
  }
  return <React.Fragment>{etoileG}</React.Fragment>
}
export default EtoileGrisF
