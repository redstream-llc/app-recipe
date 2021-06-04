import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import {HeaderComponent} from "../../components";
import fetchData from "../../utils/fetchData";

const Recipe = () => {

  const [recipe, setRecipe] = useState();

  const history = useHistory();

  useEffect( () => {
    (async () => {
      const id = history.location.pathname.split('/')[2];
      const res = await fetchData(`/recipe/${id}.json`);
      setRecipe(res);
    })()
  }, [ history.location.pathname])

  if(!recipe) return  null;

  return (
    <div className='wrapper'>
      <HeaderComponent/>
      <Container fluid>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{maxWidth: 800}}>
              <Card.Img variant="top" src={`/data${recipe.image}`} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>

                <p>Tipo de receta: {recipe.recipeCategory.join(', ')}</p>
                {Boolean(recipe.calories) && <p>Calorías: {recipe.calories}</p>}

                <br/>

                <h2>Ingredientes</h2>

                {recipe.ingredients.length > 0 &&
                  recipe.ingredients.map((i, idx) => (
                  <Card.Text style={{textAlign: 'left'}} key={idx}> <b className="mr-1">&bull;</b>
                    <span dangerouslySetInnerHTML={{__html:i}}/>
                  </Card.Text>
                  ))
                }

                <br/>

                <h2>Preparación</h2>

                {recipe.recipeInstructions.length > 0 &&
                  recipe.recipeInstructions.map((i, idx) => (
                  <Card.Text style={{textAlign: 'left'}} key={idx}><b className="mr-1">{idx+1}.</b>
                    <span dangerouslySetInnerHTML={{__html:i}}/>
                  </Card.Text>
                  ))
                }


                <Button variant="primary" onClick={()=> history.goBack()}>Vuelve</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipe;
