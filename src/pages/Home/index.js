import React, { useEffect } from 'react';
import {ReceipeComponent, HeaderComponent} from '../../components'
import {Container, Row, Col} from 'react-bootstrap';
import {observer} from 'mobx-react'
import Store from '../../store/store'
import categories from '../../assets/full/category/index.json'

const Home = observer(() => {
  const {category, setCategory} = Store

  useEffect(()=>{
    if(!category?.title) {
      setCategory(categories[0])
    }
  },[category])

  return ( 
    <div className='wrapper'> 
      <HeaderComponent/>

      {/* <img src={require('../../../public/assets/banner.jpg').default} alt='banner' width={'100%'} style={{marginBottom: 30}}/> */}

      <Container fluid>
        <Row>
          <Col>
            <h1>{category?.title}</h1>

            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              {
                category?.items.length > 0 &&
                category?.items.map((item)=>(<ReceipeComponent recipe={item}/>))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
})

export default Home;
