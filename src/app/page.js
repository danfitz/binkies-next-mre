'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return <>
    <h1 style={{ margin: '3rem 0' }}>Home</h1>
    <button onClick={() => router.push("/page1")}>Go to Page 1</button>
  </>
}