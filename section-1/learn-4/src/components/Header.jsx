import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-[#0d1117] text-[#00ff41] border-b border-[#30363d] sticky top-0 z-50 font-mono">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold hover:text-[#008f11] transition-colors duration-300 flex items-center"
                    >
                        <span className="mr-2">&gt;</span>
                        Tea_&_Code
                        <span className="animate-cursor">_</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 hover:text-[#008f11] ${isActive ? 'text-[#00ff41] underline decoration-2 underline-offset-4' : 'text-[#008f11]'
                                }`
                            }
                        >
                            ~/home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 hover:text-[#008f11] ${isActive ? 'text-[#00ff41] underline decoration-2 underline-offset-4' : 'text-[#008f11]'
                                }`
                            }
                        >
                            ./about
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 hover:text-[#008f11] ${isActive ? 'text-[#00ff41] underline decoration-2 underline-offset-4' : 'text-[#008f11]'
                                }`
                            }
                        >
                            ./contact
                        </NavLink>

                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 hover:text-[#008f11] ${isActive ? 'text-[#00ff41] underline decoration-2 underline-offset-4' : 'text-[#008f11]'
                                }`
                            }
                        >
                            ./github
                        </NavLink>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex space-x-4">
                        <button className="border border-[#30363d] text-[#00ff41] hover:bg-[#30363d] px-4 py-2 transition-colors duration-300 font-medium">
                            [ Login ]
                        </button>
                        <button className="bg-[#00ff41] text-[#0d1117] hover:bg-[#008f11] px-4 py-2 transition-colors duration-300 font-bold">
                            ./start.sh
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="md:hidden mt-4 flex space-x-6 overflow-x-auto pb-2 border-t border-[#30363d] pt-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#00ff41]' : 'text-[#008f11] hover:text-[#00ff41]'
                            }`
                        }
                    >
                        ~/home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#00ff41]' : 'text-[#008f11] hover:text-[#00ff41]'
                            }`
                        }
                    >
                        ./about
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#00ff41]' : 'text-[#008f11] hover:text-[#00ff41]'
                            }`
                        }
                    >
                        ./contact
                    </NavLink>
                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-[#00ff41]' : 'text-[#008f11] hover:text-[#00ff41]'
                            }`
                        }
                    >
                        ./github
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
