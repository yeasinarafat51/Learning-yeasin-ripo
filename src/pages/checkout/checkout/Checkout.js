import React, { useEffect, useState } from 'react';
import Checkcard from '../../shared/checkcard/Checkcard';
import Coursecard from '../../shared/coursecard/Coursecard';

const Checkout = () => {
    const [checks, setCheck] = useState('');

    useEffect( () =>{
        fetch('https://server-mu-wine.vercel.app/allcourse')
        .then(res => res.json())
        .then(data => setCheck(data));
    }, [])
    return (
       <div>
        <h1>category{checks.length}</h1>
        {
            // checks.map(category => <Coursecard
            //     key={category.id}
            //     category={category}
            // ></Coursecard> )

           
        }
        <div>
            {
                checks.map(out =><Checkcard 
                key={out.id}
                out={out}
                ></Checkcard>)
            }
        </div>
       </div>
    );
};

export default Checkout;