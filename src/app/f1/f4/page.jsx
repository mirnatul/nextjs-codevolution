import Link from 'next/link';
import React from 'react';

const F4 = () => {
    return (
        <div>
            <h2>F4 page</h2>
            <Link href='/f1/f3'>F3</Link>
            <Link href='/about'>About</Link>
        </div>
    );
};

export default F4;