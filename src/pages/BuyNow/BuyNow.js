import React, { useEffect, useState } from 'react';

const BuyNow = () => {
    const [bike, setBike] = useState([])
    useEffect(() => {


        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBike(data))

    }, [])

    return (
        <div>
            <h1>This is buy now</h1>
        </div>
    );
};

export default BuyNow;