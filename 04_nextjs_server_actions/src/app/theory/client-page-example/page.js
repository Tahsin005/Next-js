'use client';

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

const ClientPageExample = () => {
    const [products, setProducts] = useState([]);
    async function getListOfProducts() {
        const data = await fetchListOfProducts();
        console.log(data);
        if (data) setProducts(data);
    }
    useEffect(() => {
        getListOfProducts();
    }, []);
    return (
        <div className="p-6">
            <h1 className="my-3 text-2xl font-bold">Server actions example - client components</h1>
            <ul className="p-6 gap-4 bg-purple-400 rounded-lg">
                {products.map((product) => (
                    <li className="bg-blue-500 text-white border-2 border-black rounded-lg p-4 my-2" key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ClientPageExample