import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Welcome to Tea & Code
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Learn React Router with practical examples and build amazing web applications.
                    The tea will keep flowing while we code!
                </p>

                <div className="mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80"
                        alt="Coding Setup"
                        className="rounded-lg shadow-lg mx-auto w-full max-w-2xl"
                    />
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <Link
                        to="/about"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Learn More
                    </Link>
                    <Link
                        to="/github"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        View GitHub
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">React Router</h3>
                        <p className="text-gray-600">
                            Learn client-side routing with React Router DOM v6.4+
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Dynamic Routes</h3>
                        <p className="text-gray-600">
                            Handle dynamic parameters and URL patterns
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                        <p className="text-gray-600">
                            Fetch data with loaders and useLoaderData
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
