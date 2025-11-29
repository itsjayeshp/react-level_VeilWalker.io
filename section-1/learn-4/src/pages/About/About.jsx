import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-4 terminal-text-shadow">
                        &gt; About_Us
                    </h1>
                    <p className="text-xl text-[#008f11]">
                        // Building real React applications...
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-[#0d1117] rounded-none shadow-[0_0_15px_rgba(0,255,65,0.1)] p-8 mb-8 border border-[#30363d]">
                    <h2 className="text-3xl font-bold text-[#00ff41] mb-6 text-center border-b border-[#30363d] pb-4">
                        &gt; Our_Mission
                    </h2>
                    <div className="prose prose-lg max-w-none text-[#008f11] space-y-4 font-mono">
                        <p>
                            &gt; Most tutorials only focus on creating UI clones without teaching proper
                            application architecture, routing, and state management. We believe in
                            building <strong className="text-[#00ff41]">complete, production-ready applications</strong> that
                            demonstrate real-world development patterns.
                        </p>
                        <p>
                            &gt; This project goes beyond basic UI replication. We're building a proper
                            <strong className="text-[#00ff41]"> Single Page Application</strong> with client-side routing,
                            dynamic content loading, and scalable architecture.
                        </p>
                    </div>
                </div>

                {/* What You'll Learn */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-[#0d1117] p-6 border border-[#30363d] hover:border-[#00ff41] transition-colors">
                        <h3 className="text-2xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-2">
                            &gt; Core_Concepts
                        </h3>
                        <ul className="space-y-3 text-[#008f11] font-mono">
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                React Router DOM installation & setup
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Layout patterns with persistent elements
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Dynamic routing with URL parameters
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Data fetching with loaders
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#0d1117] p-6 border border-[#30363d] hover:border-[#00ff41] transition-colors">
                        <h3 className="text-2xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-2">
                            &gt; Advanced_Topics
                        </h3>
                        <ul className="space-y-3 text-[#008f11] font-mono">
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Industry-standard project structure
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Error boundaries & loading states
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Nested routing patterns
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00ff41] mr-2">[x]</span>
                                Performance optimization
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-[#0d1117] border border-[#00ff41] p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#00ff41]">
                        &gt; Ready_to_Master?
                    </h3>
                    <p className="mb-6 text-[#008f11] font-mono">
                        // Start building real applications today...
                    </p>
                    <Link
                        to="/github"
                        className="bg-[#00ff41] text-[#0d1117] hover:bg-[#008f11] px-6 py-3 font-bold transition-colors duration-300 inline-block"
                    >
                        ./explore_demo.sh
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
