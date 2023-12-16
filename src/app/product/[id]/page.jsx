import React from 'react';

const SingleProduct = ({ params }) => {
    return (
        <div>
            Product No: {params.id}
        </div>
    );
};

export default SingleProduct;