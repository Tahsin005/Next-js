'use client';
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Order placed');
        router.push('/');
    }
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Order</button>
        </>
    )
}