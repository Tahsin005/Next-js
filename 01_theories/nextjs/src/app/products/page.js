import React from 'react'

const Products = async ({ searchParams }) => {
    console.log((await searchParams).search);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return (
        <div className='bg-pink-400'>Products</div>
    )
}

export default Products