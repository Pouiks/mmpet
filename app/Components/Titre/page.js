import React from 'react'
import PropTypes from 'prop-types'


const Titre = ({title}) => {
  return (
    <div style={{margin:"0 auto"}}>

      <h1 style={{color:"white", fontSize: "10"}}>{title}</h1>
    </div>

  )
}

Titre.propTypes = {
    
}

export default Titre