import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetail = ({ params }) => {
    if (params.reviewId > 1000) {
        return notFound();
    }
    return (
        <div>
            Review {params.reviewId} for product {params.id}
        </div>
    );
};

export default ReviewDetail;