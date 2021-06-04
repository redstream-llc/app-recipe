import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Modal} from 'react-bootstrap';
import fetchData from "../../utils/fetchData";

const CategoryModal = (props) => {
  const history = useHistory()

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const cats = await fetchData('/category/index.json');
      setCategories(cats)
    })();
  }, []);


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
          <div key={c.id}
            onClick={()=>{
              history.push('/category/' + c.id);
              window.location.reload();
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
