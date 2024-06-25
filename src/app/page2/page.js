import Link from "next/link";

export default function Page2() {
    return <>
        <h1 style={{ margin: '3rem 0' }}>Page 2</h1>
        <Link href="/page3">Go to Page 3</Link>
    </>
}