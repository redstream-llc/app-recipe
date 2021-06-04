import React, {useEffect, useState} from 'react';
import {RecipeComponent, HeaderComponent} from '../../components'
import {Container, Row, Col} from 'react-bootstrap';
import fetchData from "../../utils/fetchData";
import {useHistory} from "react-router-dom";

const Home = () => {

  const history = useHistory();
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('ss');
    (async () => {

      if(history.location.pathname.match(/category/)) {
        const id = history.location.pathname.split('/')[2];
        const cat = await fetchData(`/category/${id}.json`);
        setCategory(cat);
        setItems(cat.items);
      } else {
        const cats = await fetchData('/category/index.json');
        const cat = await fetchData(cats[0].source);
        setCategory(cat);
        setItems(cat.items);
      }

    })();
  }, [history]);


  if(!category) return null;
  return (
    <div className='wrapper'>
      <HeaderComponent/>

       <img src="banner.jpg" alt='banner' width={'100%'} style={{marginBottom: 30}}/>

      <Container fluid>
        <Row>
          <Col>
            <h1>{category.title}</h1>

            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              {
                items.length > 0 &&
                items.map((item)=>(<RecipeComponent key={item.id} recipe={item}/>))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
