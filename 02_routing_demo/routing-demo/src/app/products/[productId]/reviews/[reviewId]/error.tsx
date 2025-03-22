"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ErrorBoundary({
    error, reset
}: {
    error: Error,
    reset: () => void
}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <>
            <div>{error.message}</div>
            <button onClick={() => reload()}>Try again</button>
        </>
    )
}