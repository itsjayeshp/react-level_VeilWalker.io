import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-[#00ff41] mb-6 terminal-text-shadow">
                    &gt; Welcome_to <span className="text-[#1f6feb]">Tea_&_Code</span>
                </h1>
                <p className="text-xl text-[#008f11] mb-8 max-w-3xl mx-auto leading-relaxed">
                    // Master React Router with real-world examples
                    <br />
                    // and build scalable web applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        to="/about"
                        className="bg-[#00ff41] hover:bg-[#008f11] text-[#0d1117] px-8 py-4 font-bold text-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.5)] hover:shadow-[0_0_20px_rgba(0,255,65,0.8)]"
                    >
                        ./start_learning.sh
                    </Link>
                    <Link
                        to="/github"
                        className="border border-[#30363d] hover:border-[#00ff41] text-[#00ff41] px-8 py-4 font-bold text-lg transition-all duration-300 hover:bg-[#30363d]"
                    >
                        cat demo.log
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto terminal-box p-2 rounded-lg">
                    <div className="bg-[#0d1117] border border-[#30363d] rounded p-4 text-left font-mono text-sm md:text-base overflow-x-auto">
                        <div className="flex gap-2 mb-4 border-b border-[#30363d] pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-[#00ff41]">
                            <code>
                                {`const developer = {
    name: "You",
    skills: ["React", "Router", "Tailwind"],
    drink: "Tea",
    status: "Learning..."
};

function buildFuture() {
    while(alive) {
        code();
        sip(tea);
    }
}

buildFuture();`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#00ff41] mb-12 border-b border-[#30363d] inline-block mx-auto pb-2 px-8">
                    &gt; System_Capabilities
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#0d1117] p-6 border border-[#30363d] hover:border-[#00ff41] transition-colors duration-300 group">
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-[#00ff41] mb-3 group-hover:text-[#1f6feb] transition-colors">{feature.title}</h3>
                            <p className="text-[#008f11] font-mono text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

const features = [
    {
        icon: "⚡",
        title: "Client-Side Routing",
        description: ">> Executing React Router DOM v6.4+ protocols..."
    },
    {
        icon: "🔄",
        title: "Dynamic Routes",
        description: ">> Handling URL parameters and nested structures..."
    },
    {
        icon: "📡",
        title: "API Integration",
        description: ">> Fetching data streams via loaders..."
    },
    {
        icon: "📱",
        title: "Responsive Layouts",
        description: ">> Adapting viewport matrix for all devices..."
    },
    {
        icon: "🔗",
        title: "Navigation Patterns",
        description: ">> Optimizing internal link structures..."
    },
    {
        icon: "🏗️",
        title: "Scalable Architecture",
        description: ">> Organizing project directory tree..."
    }
]

export default Home
