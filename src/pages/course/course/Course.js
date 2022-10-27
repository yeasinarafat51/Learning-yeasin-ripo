import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import Coursecard from '../../shared/coursecard/Coursecard';
import './Course.css';



const Course = () => {
    // const cor = useLoaderData();
    // const { name} = cor;
   
    const [categories, setcategories] = useState([]);

    useEffect( () =>{
        fetch('https://server-mu-wine.vercel.app/allcourse')
        .then(res => res.json())
        .then(data => setcategories(data));
    }, [])
    return (
        <div>
          <Row>
           <Col lg="3">
                   <div>
                   <h2>All Course: {categories.length}</h2>
                   </div>
                   <div>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </p>)
                    }
                   </div>
                </Col>
                <Col lg="9">
                  <Row>
                  <div className='grid-con '>
                   {
                        categories.map(category => <Coursecard
                        key={category.id}
                        category={category}
                        ></Coursecard>)
                    }
                   </div>
                  </Row>
                    {/* <h2>course:{name}</h2> */}
                    
                </Col>
           </Row>
        </div>
    );
};

export default Course;