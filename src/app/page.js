import Link from "next/link";

export default function Home() {
  return <>
    <h1 style={{ margin: '3rem 0' }}>Home Page</h1>
    <Link href="/page1">Go to Page 1</Link>
  </>
}
