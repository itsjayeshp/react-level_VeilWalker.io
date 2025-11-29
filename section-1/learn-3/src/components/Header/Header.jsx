import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-orange-500">
                    Tea & Code
                </Link>

                <nav className="flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:text-orange-400 transition duration-300 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-300'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `hover:text-orange-400 transition duration-300 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-300'
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `hover:text-orange-400 transition duration-300 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-300'
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `hover:text-orange-400 transition duration-300 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-300'
                            }`
                        }
                    >
                        GitHub
                    </NavLink>
                </nav>

                <div className="flex space-x-4">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition duration-300">
                        Login
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
