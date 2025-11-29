import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#0d1117] text-[#00ff41] border-t border-[#30363d] mt-16 font-mono">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-[#00ff41] mb-4 inline-block hover:text-[#008f11] transition-colors">
                            &gt; Tea_&_Code_
                        </Link>
                        <p className="text-[#008f11] max-w-md">
                            // Learn React Router with practical examples
                            <br />
                            // and build amazing web applications.
                            <br />
                            while (coding) &#123; drink(tea); &#125;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-[#30363d] inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    ~/home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    ./about
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    ./contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/github" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    ./github
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b border-[#30363d] inline-block pb-1">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    privacy.md
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    terms.md
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#008f11] hover:text-[#00ff41] transition-colors duration-300">
                                    cookies.json
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#30363d] mt-8 pt-8 text-center text-[#008f11]">
                    <p>&copy; 2024 Tea & Code. All rights reserved. Executing...</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
