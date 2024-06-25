'use client';

import { useRouter } from "next/navigation";

export default function Page1() {
    const router = useRouter();

    return <>
        <h1 style={{ margin: '3rem 0' }}>Page 1</h1>
        <button onClick={() => router.push("/page2")}>Go to Page 2</button>
    </>
}