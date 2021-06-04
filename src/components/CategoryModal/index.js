import React from 'react';
import {useHistory} from "react-router-dom";
import {Modal} from 'react-bootstrap';
import categories from '../../assets/full/category/index.json'
import Store from '../../store/store'

const CategoryModal = (props) => {
  const history = useHistory()
  const {setCategory} = Store
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <b>Categories</b>
      </Modal.Header>
      <Modal.Body>
      {
        categories.map((c) => (
          <div
            onClick={()=>{
              history.push('/')
              setCategory(c)
              props.onHide()
            }}
            style={{padding: 5, textAlign: 'center', width: '100%'}}
          >
            {c.title}
          </div>
        ))
      }
      </Modal.Body>
    </Modal>
  );
}

export default CategoryModal