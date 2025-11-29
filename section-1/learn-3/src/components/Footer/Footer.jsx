import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-gray-400">
                    &copy; 2024 Tea & Code. All rights reserved. | Built with React Router & Tailwind CSS
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Terms of Service
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
