import React from 'react';
import {Link} from "react-router-dom";

const ReceipeComponent = ({id}) => {
  return (
    <div className="ReceipeComponent">
        <Link to={`/receipe/${id}`}>{id}</Link>
    </div>
  );
}

export default ReceipeComponent;