import React from 'react';
import {ReceipeComponent} from '../../components'

const Home = () => {
  return (
    <div className="Home">
        <ReceipeComponent id={1}/>
        <ReceipeComponent id={2}/>
        <ReceipeComponent id={3}/>
    </div>
  );
}

export default Home;
