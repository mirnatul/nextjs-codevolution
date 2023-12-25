"use client"

export default function ErrorBoundary({ error }) {
    return <div>
        <h2>Error in reviewId: {error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
}