import { fetchListOfProducts } from "@/actions";

const ServerPageExample = async () => {
    const products = await fetchListOfProducts();
    console.log(products);
    return (
        <div className="p-6">
            <h1 className="my-3 text-2xl font-bold">Server actions example - server components</h1>
            <ul className="p-6 gap-4 bg-purple-400 rounded-lg">
                {products.map((product) => (
                    <li className="bg-blue-500 text-white border-2 border-black rounded-lg p-4 my-2" key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ServerPageExample