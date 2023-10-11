import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


const ProfilCard = props => {
  return (
    
    <Card style={{ width: '20%', padding:10 }}>
      <Card.Img variant="top" src="holder.js/100px180" alt="Photo de l'utilisateur"/>
      <Card.Body>
        <Card.Title>Nom de l'utilisateur</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Voir la Fiche</Button>
      </Card.Body>
    </Card>
  )
}

ProfilCard.propTypes = {}

export default ProfilCard