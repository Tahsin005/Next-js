import React from 'react'

const Products = async ({ searchParams }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return (
        <div className='bg-pink-400'>Products</div>
    )
}

export default Products