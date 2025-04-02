import { fetchAllProducts } from "@/actions";
import ProductCard from "../components/product-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession = await auth();

  if (!getSession?.user) redirect("/unauth-page");

  const getAllProducts = await fetchAllProducts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">🛍️ Shopping Cart</h1>

      {/* Products Grid */}
      <div className="min-h-[80vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0 ? (
          getAllProducts.data.map((productItem) => (
            <ProductCard key={productItem.id} item={productItem} />
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center col-span-full">No products available. Check back later! 🙁</p>
        )}
      </div>
    </div>
  );
}
