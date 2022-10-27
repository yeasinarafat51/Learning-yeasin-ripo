import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Check = () => {
    const catalog = useLoaderData();
    console.log(catalog)
    return (
        <div>
            
        </div>
    );
};

export default Check;