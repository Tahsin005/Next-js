export default async function ReviewList({
    params,
}: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId
    return <h1>Reviews for Product {productId}</h1>
}