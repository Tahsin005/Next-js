import Link from "next/link";

export default function ProductList() {
    const productId = 1;
    return (
        <>
            <Link className="underline" href={'/'}>Home</Link>
            <h1>Product List</h1>
            <Link className="underline" href={`/products/${productId}`}>Product 1</Link>
            <br />
            <Link className="underline" href={'/products/2'}>Product 2</Link>
            <br />
            <Link className="underline" href={'/products/3'} replace>Product 3</Link>
        </>
    )
}