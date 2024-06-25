'use client';

import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page2() {
    const router = useRouter();

    return <>
        <h1 style={{ margin: '3rem 0' }}>Page 2</h1>
        <button onClick={() => router.push("/page3")}>Go to Page 3</button>
    </>
}