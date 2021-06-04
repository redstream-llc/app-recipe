import React from 'react';
import {Navbar} from 'react-bootstrap';
import { MenuOutlined } from '@ant-design/icons';
import CategoryModal from '../CategoryModal'



const HeaderComponent = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar>
      <Navbar.Brand href='/'>Recetasdecocina</Navbar.Brand>

      <div
        onClick={()=>{
        setModalShow(true)
        }}
        style={{position: 'absolute', right: 24}}
      >
        <MenuOutlined style={{color: 'white'}}/>
      </div>

      {modalShow &&
        <CategoryModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      }
    </Navbar>
  );
}

export default HeaderComponent;
