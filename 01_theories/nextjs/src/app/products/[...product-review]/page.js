import React from 'react'

const ProductReview = async ({ params }) => {
    console.log(await params);
    return (
        <div>ProductReview : Catch all segment</div>
    )
}

export default ProductReview