import React from 'react'
import { useParams, Link } from 'react-router-dom'

const User = () => {
    const { id } = useParams()

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">User Profile</h1>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="text-6xl mb-4">👤</div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        User ID: <span className="text-orange-500">{id}</span>
                    </h2>

                    <p className="text-gray-600 mb-6">
                        This demonstrates dynamic routing in React Router.
                    </p>

                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            Try changing the URL to /user/123 or /user/hitesh to see different results!
                        </p>

                        <div className="flex justify-center space-x-4">
                            <Link to="/user/123" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                                User 123
                            </Link>
                            <Link to="/user/hitesh" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                                User Hitesh
                            </Link>
                            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
