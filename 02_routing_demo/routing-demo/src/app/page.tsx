import Link from "next/link";

export default function Home() {
    return <>
        <h1>Welcome Home!</h1>
        <Link className="underline" href="/blog">blog</Link>
        <br />
        <Link className="underline" href="/products">products</Link>
    </>
}