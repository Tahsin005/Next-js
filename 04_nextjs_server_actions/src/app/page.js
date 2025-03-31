import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-800">Server Actions</h1>
      <div className="my-6 bg-purple-500 rounded-lg border-2 border-purple-900 p-6">
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={100} />
      </div>
      <Link className="mt-6 px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-purple-600 transition-all" href="/user-management">
        Manage Users
      </Link>
    </div>
  );
}
