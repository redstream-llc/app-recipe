import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {HeaderComponent} from '../../components'
import {observer} from 'mobx-react'
import Store from '../../store/store'
import { useHistory } from 'react-router';

const Receipe = observer(() => {
  const {receipe} = Store
  const history = useHistory()
  return (
    <div className='wrapper'>
      <HeaderComponent/> 
      <Container fluid>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{maxWidth: 800}}>
              <Card.Img variant="top" src={require(`../../assets/full${receipe.image}`).default} />
              <Card.Body>
                <Card.Title>{receipe?.title}</Card.Title>
                <br/>
                {receipe?.ingredients.length > 0 &&
                  receipe?.ingredients.map((i, idx) => (
                  <Card.Text style={{textAlign: 'left'}}> <b>{idx+1}.</b> {i} </Card.Text>
                  ))
                }

                <br/>
                {receipe?.recipeInstructions.length > 0 &&
                  receipe?.recipeInstructions.map((i, idx) => (
                  <Card.Text style={{textAlign: 'left'}}> <b>{idx+1}.</b> {i} </Card.Text>
                  ))
                }
                
                <Button variant="primary" onClick={()=> history.push('/')}>Go back</Button>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
})

export default Receipe;