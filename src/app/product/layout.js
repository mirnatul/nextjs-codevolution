import React from 'react';


export const metadata = {
    title: {
        default: 'Product',
        template: "%s | Product | Next.js App"
    }
}

const ProductLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ProductLayout;