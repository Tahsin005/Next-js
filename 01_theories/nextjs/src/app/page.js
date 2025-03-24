'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Welcome to the Next.js Learning Series</h1>
        <hr/>
        <Link href="/products">Products</Link>
        <Link href="/account">Account</Link>
        <Link href="/cart">Cart</Link>


        <h2 className="mt-6 font-bold">Navigating using useRouter</h2>
        <button onClick={() => router.push("/products")}>Products - using useRouter</button>
      </main>
  );
}
