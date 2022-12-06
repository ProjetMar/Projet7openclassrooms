import React from 'react'
function EtoileRougeF({ EtoileRouge, nEtoiles }) {
  let etoileR = []
  for (let i = 0; i < nEtoiles; i++) {
    etoileR.push(<img key={i} src={EtoileRouge} alt="etoile rouge" />)
  }
  return <React.Fragment>{etoileR}</React.Fragment>
}
export default EtoileRougeF
