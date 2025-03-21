import Link from "next/link";

export default function Home() {
    return <>
        <h1>Welcome Home!</h1>
        <Link className="underline" href="/blog">blog</Link>
        <br />
        <Link className="underline" href="/products">products</Link>
        <br />
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <br />
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
}