import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Utensils, BookOpen } from "lucide-react";

export default function RecipeDetailsItem({ getRecipeDetails }) {
    return (
        <div className="px-6 py-12 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 flex items-center justify-center gap-2">
                <Utensils className="w-8 h-8 text-blue-600" /> {getRecipeDetails?.name}
            </h2>

            <div className="flex justify-center mb-10">
                <Link
                    href={"/recipe-list"}
                    className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all hover:bg-blue-700 hover:scale-105"
                >
                    <ArrowLeft className="w-5 h-5" /> Go to Recipe List
                </Link>
            </div>

            <div className="py-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="w-full flex justify-center">
                        <div className="relative w-full lg:w-4/5 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={getRecipeDetails?.image}
                                alt={getRecipeDetails?.name}
                                width={500}
                                height={350}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-gray-700" /> {getRecipeDetails?.name}
                        </h2>
                        <p className="text-lg text-gray-700">{getRecipeDetails?.mealType[0]}</p>
                        <p className="text-lg font-semibold text-gray-800 mt-3">Cuisine: {getRecipeDetails?.cuisine}</p>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <Utensils className="w-5 h-5 text-green-600" /> Ingredients
                            </h3>

                            <ul
                                className={`mt-3 grid gap-2 text-md text-gray-700 ${getRecipeDetails?.ingredients.length > 6 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
                            >
                                {getRecipeDetails?.ingredients.map((item, index) => (
                                    <li key={index} className="hover:text-blue-600 transition">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
