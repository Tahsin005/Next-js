const ProductDetails = async ({ params }) => {
    console.log(params);
    const { details } = await params;
    return (
        <div>This is product details page {details}.</div>
    )
}

export default ProductDetails