import Link from 'next/link';

export default function Page1() {
    return <>
        <h1 style={{ margin: '3rem 0' }}>Page 1</h1>
        <Link href="/page2">Go to Page 2</Link>
    </>
}