import React from 'react'
function EtoileC({ EtoileC, nEtoiles }) {
  let etoileC = []
  for (let i = 0; i < nEtoiles; i++) {
    etoileC.push(<img key={i} src={EtoileC} alt="etoile" />)
  }
  return <React.Fragment>{etoileC}</React.Fragment>
}
export default EtoileC
