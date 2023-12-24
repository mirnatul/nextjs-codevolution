import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            {children}
            <h2 className='bg-red-200'>Featured Products</h2>
        </div>
    );
};

export default layout;