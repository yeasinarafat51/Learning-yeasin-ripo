import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Coursecard = ({category}) => {
    const {id, name, logo} = category;
    return (
        <Card className="mb-5 " style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
       
        <Button variant="info"><Link to={`/categories/${id}`}>Detalis</Link></Button>
      </Card.Body>
    </Card>
    );
};

export default Coursecard;