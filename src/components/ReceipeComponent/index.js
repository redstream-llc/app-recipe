import React from 'react';
import {useHistory} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';


const RecipeComponent = ({recipe}) => {
  const history = useHistory()


  //const {setRecipe} = Store

  return (
    <div className="ReceipeComponent">
        <Card style={{margin: 20, maxWidth: 500 }}>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Img variant="top" src={`/data${recipe.image}`} />
          <Card.Body>
            <Button
              variant="primary"
              onClick={()=> {
                history.push(`/receipe/${recipe.id}`)
              }}
            >
              Más detalles
            </Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default RecipeComponent;
