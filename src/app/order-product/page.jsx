"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const OrderProduct = () => {

    const router = useRouter();

    const handleClick = () => {
        console.log("placing your order");
        // navigate home page
        router.push('/')
        // router.replace('/')
        // router.back()
        // router.forward()
    }
    return (
        <div>
            <h1>Order page</h1>
            <button onClick={handleClick} className='m-2 p-2 border-4 hover:bg-yellow-200'>Place Order</button>
        </div>
    );
};

export default OrderProduct;