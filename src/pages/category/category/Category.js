import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import  ReactPrint from 'react-to-print';

import Coursecard from '../../shared/coursecard/Coursecard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Category = () => {
    // const [card, setcard] = useState([]);

    // useEffect( () =>{
    //     fetch('https://server-mu-wine.vercel.app/allcourse')
    //     .then(res => res.json())
    //     .then(data => setcard(data));
    // }, [])
    const categories = useLoaderData();
    // console.log(categories)
    const {name,discription,logo} = categories
    return (
        <div>
            {/* <h2>yeasin</h2>
            <h2>category:{categories.length}</h2>
            <h2>{name}</h2> */}
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
        <Button variant="info"><Link to='./'>Detalis</Link></Button>
       
      </Card.Body>
    </Card> 
            </div>
            {/* {
                categories.map(category => <Coursecard
                key ={category.id}
                category={category}
                >{category.name}</Coursecard>)
            } */}
            {/* {
                card.map(cards => <Card
                key={cards.id}
                cards={cards}
                ></Card>)
            } */}
        </div>
    );
};

export default Category;