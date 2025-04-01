import { fetchAuthUserAction } from "@/actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success) redirect("/sign-in");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 rounded-md">
      <div className="bg-gray-800 shadow-2xl rounded-xl p-10 w-full max-w-lg text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
          Welcome to NextAuth
        </h1>
        <p className="text-lg text-purple-500">Name: {currentUser?.data?.userName}</p>
        <p className="text-lg text-green-500">Email: {currentUser?.data?.email}</p>
        <p className="text-gray-300 text-lg mb-6">
          Secure authentication built with modern technologies.
        </p>
        <Image
          src="/next.svg"
          alt="Authentication Illustration"
          width={80}
          height={80}
          className="mx-auto opacity-90 bg-white px-4 py-2 rounded-md"
        />
      </div>
    </div>
  );
}
