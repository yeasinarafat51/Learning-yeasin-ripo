import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkcard from '../../shared/checkcard/Checkcard';
import Coursecard from '../../shared/coursecard/Coursecard';
import './Checkout.css'

const Checkout = () => {
    const tshirts = useLoaderData();
    // const [checks, setCheck] = useState('');

    // useEffect( () =>{
    //     fetch('https://server-mu-wine.vercel.app/allcourse')
    //     .then(res => res.json())
    //     .then(data => setCheck(data));
    // }, [])
    return (
       <div className='find'>
        {/* <h1>category{checks.length}</h1> */}
        {
            // checks.map(category => <Coursecard
            //     key={category.id}
            //     category={category}
            // ></Coursecard> )

           
        }
        {/* <div>
            {
                checks.map(out =><Checkcard 
                key={out.id}
                out={out}
                ></Checkcard>)
            }
        </div> */}
        {
            tshirts.map(tshirt =><Checkcard
            
            key={tshirt.id}
            tshirt={tshirt}

            ></Checkcard>)
        }

       </div>
    );
};

export default Checkout;