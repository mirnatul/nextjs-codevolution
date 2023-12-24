import React from 'react';
import Link from 'next/link';

const ProductPage = () => {
    const id = 100
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                <li><Link href='/product/1'>Product 1</Link></li>
                <li><Link href='/product/2'>Product 2</Link></li>
                <li><Link href='/product/3' replace>Product 3</Link></li>
                <li><Link href={`/product/${id}`}>Product {id}</Link></li>
            </ul>
            <h2>Go back home link</h2>
            <p className='bg-red-200'><Link href='/'>Home</Link></p>
        </div>
    );
};

export default ProductPage;