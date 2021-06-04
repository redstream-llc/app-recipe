import React from 'react';
import {useHistory} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import Store from '../../store/store'

const ReceipeComponent = ({recipe}) => {
  const history = useHistory()
  const {setRecipe} = Store
  
  return (
    <div className="ReceipeComponent">
        <Card style={{margin: 20, maxWidth: 500, }}>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Img variant="top" src={require(`../../assets/data${recipe.image}`).default} />
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text> */}
            <Button 
              variant="primary"
              onClick={()=> {
                setRecipe(require(`../../assets/data${recipe.source}`))
                history.push(`/receipe/${recipe.id}`)
              }}
            >
              Open
            </Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default ReceipeComponent;