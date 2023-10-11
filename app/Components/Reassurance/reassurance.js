import React from 'react'
import PropTypes from 'prop-types'
import Card from '../ProfilCard/ProfilCard'
import {Container, Row, TabContainer, ToastContainer} from "react-bootstrap"

const Reassurance = props => {
  return (
    // <div className="reassurance-box" style={{width:"100%", background: "grey", height:"500px", display:"flex", flexWrap:"wrap"}}>
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    // </div>
    <Container>
      <Row xs={1} md={2} >
        <h2>Découvrez les derniers inscrits</h2>
      </Row>
      <Row xs={1} md={2} className="g-9" style={{justifyContent:"space-evenly",display:"flex", flexWrap:"wrap", margin:"20px 20px"}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>
    </Container>
  )
}

Reassurance.propTypes = {}

export default Reassurance