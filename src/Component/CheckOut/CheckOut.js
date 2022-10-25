import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkout = useLoaderData();
    console.log(checkout)

    return (
        <div>
            
        </div>
    );
};

export default CheckOut;