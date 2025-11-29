import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found.</p>
        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Back to Home
        </Link>
    </div>
)

export default NotFound
