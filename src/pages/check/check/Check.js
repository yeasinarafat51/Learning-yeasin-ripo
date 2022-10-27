import React from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Check = () => {
    const catalog = useLoaderData();
    console.log(catalog)
    const {name,discription,logo} = catalog;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}
        
        </Card.Title>
        <Card.Text>
        {discription}
        </Card.Text>
        {/* <div>
            <div>

            </div>
            <ReactPrint trigger={(<button>print</button>)} />
        </div> */}
        <Button variant="info"><Link to='./'>Download</Link></Button>
       
      </Card.Body>
    </Card> 
            
        </div>
    );
};

export default Check;