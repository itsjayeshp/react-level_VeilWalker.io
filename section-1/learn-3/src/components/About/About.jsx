import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About Tea & Code</h1>

                <div className="bg-white rounded-lg shadow-md p-8 mb-6">
                    <p className="text-gray-700 mb-4">
                        Welcome to Tea & Code, where we combine our love for coding with our passion for tea!
                        This project is a comprehensive React Router tutorial designed to help you master modern
                        web routing techniques.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Built with React Router v6.4+ and styled with Tailwind CSS, this application demonstrates:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Client-side routing with React Router</li>
                        <li>Dynamic route parameters</li>
                        <li>Nested routes and layouts</li>
                        <li>Navigation with Link and NavLink</li>
                        <li>Error handling and 404 pages</li>
                        <li>API integration with loaders</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-orange-700 mb-3">Our Mission</h3>
                        <p className="text-gray-700">
                            To provide clear, practical examples of React Router that help developers
                            build better single-page applications.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Vision</h3>
                        <p className="text-gray-700">
                            Making web development accessible and enjoyable for everyone, one sip of tea at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
