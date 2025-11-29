import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">{error?.message || 'An unexpected error occurred.'}</p>
            <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                Back to Home
            </Link>
        </div>
    )
}

export default ErrorPage
