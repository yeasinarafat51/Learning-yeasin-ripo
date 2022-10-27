import React from 'react';

const Card = ({cards}) => {
    const {id, name, logo, discription} =cards
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Card;