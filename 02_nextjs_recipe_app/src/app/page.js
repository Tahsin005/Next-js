import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-lg">
        <ChefHat className="w-16 h-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Recipe App</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover delicious recipes and start cooking today!
        </p>
        <Link href="/recipe-list">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all">
            Explore Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
