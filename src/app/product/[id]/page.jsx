import React from 'react';


export const generateMetadata = ({ params }) => {
    return {
        title: `Product ${params.id}`
    }
}

const SingleProduct = ({ params }) => {
    return (
        <div>
            Product No: {params.id}
        </div>
    );
};

export default SingleProduct;