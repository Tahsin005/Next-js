import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ productId: string}>
};

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`walton ${id}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
    };
};

export default async function ProductDetails ({ params }: Props) {
    const productId = (await params).productId;
    return <>
        <h1>Details about product {productId}</h1>
        <Link className="underline" href={`/products/${productId}/reviews/1`} replace>Review 1</Link>
    </>
};