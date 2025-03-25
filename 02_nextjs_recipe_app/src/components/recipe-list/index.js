import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { UtensilsCrossed, ArrowLeft, Star, Globe2 } from "lucide-react";

export default function RecipeList({ recipeList }) {
    return (
        <div className="px-6 py-12 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 flex items-center justify-center gap-2">
                <UtensilsCrossed className="w-8 h-8 text-blue-600" /> Recipes
            </h2>

            <div className="flex justify-center mb-10">
                <Link
                    href={"/"}
                    className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all hover:bg-blue-700 hover:scale-105"
                >
                    <ArrowLeft className="w-5 h-5" /> Go Home
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipeList && recipeList.length > 0 ? (
                    recipeList.map((recipe, index) => (
                        <Link key={index} href={`/recipe-list/${recipe.id}`} className="group">
                            <Card className="overflow-hidden shadow-lg transition-transform transform hover:scale-[1.05] rounded-xl">
                                <CardContent className="bg-white cursor-pointer">
                                    <div className="w-full h-56 overflow-hidden rounded-t-xl">
                                        <img
                                            src={recipe.image}
                                            alt={recipe.name}
                                            className="w-full h-full object-cover object-center transition-transform group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                                            {recipe.name}
                                        </h3>
                                        <div className="mt-3 flex items-center justify-between">
                                            <p className="text-md text-gray-600 flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500" /> {recipe.rating}
                                            </p>
                                            <span className="text-md text-gray-700 font-bold flex items-center gap-1">
                                                <Globe2 className="w-4 h-4 text-green-600" /> {recipe.cuisine}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg col-span-3">
                        No recipes available. 🍳
                    </p>
                )}
            </div>
        </div>
    );
}
