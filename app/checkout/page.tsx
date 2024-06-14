'use client'

import { useSearchParams } from 'next/navigation'

export default function Page() {
    const searchParams = useSearchParams()
    const status = searchParams.get("status");

    return <main>
        <h1>Checkout Status Page</h1>
        Post: {status}
    </main>
}
