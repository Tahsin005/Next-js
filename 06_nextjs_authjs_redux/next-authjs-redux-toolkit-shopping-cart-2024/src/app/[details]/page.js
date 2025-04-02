import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import AddToCartButton from "@/components/add-to-cart-button";
import { redirect } from "next/navigation";

async function ProductDetails({ params }) {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  const getProductDetails = await fetchProductDetails(params.details);
  console.log(getProductDetails, "getProductDetails");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="bg-gray-100 w-full lg:sticky top-0 text-center p-6 rounded-lg shadow-md">
          <img
            src={getProductDetails?.thumbnail}
            alt={getProductDetails?.title}
            className="w-4/5 rounded-lg object-cover mx-auto"
          />
          <hr className="border-gray-400 border my-6" />
          <div className="flex flex-wrap gap-4 justify-center">
            {getProductDetails?.images.map((imageItem, index) => (
              <img
                key={index}
                src={imageItem}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-md cursor-pointer transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {getProductDetails?.title}
          </h2>
          <p className="mt-3 text-xl text-gray-800 font-semibold">
            ${getProductDetails?.price}
          </p>
          <h3 className="mt-4 text-lg font-medium text-gray-700">
            {getProductDetails?.description}
          </h3>
          <div className="mt-6">
            <AddToCartButton productItem={getProductDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
