'use client';

import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page3() {
    const router = useRouter();

    return <>
        <h1 style={{ margin: '3rem 0' }}>Page 3</h1>
        <button onClick={() => router.push("/")}>Go Home</button>
    </>
}