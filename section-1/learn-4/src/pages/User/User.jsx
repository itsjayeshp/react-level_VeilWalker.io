import React from 'react'
import { useParams, Link } from 'react-router-dom'

const User = () => {
    const { id } = useParams()

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-4 terminal-text-shadow">
                        &gt; Dynamic_Routing
                    </h1>
                    <p className="text-xl text-[#008f11]">
                        // Capture URL parameters...
                    </p>
                </div>

                {/* User Profile Card */}
                <div className="bg-[#0d1117] p-8 border border-[#30363d] text-center shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                    <div className="text-6xl mb-6">👤</div>
                    <h2 className="text-3xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-4 inline-block">
                        &gt; User_Profile
                    </h2>

                    <div className="bg-[#0d1117] p-6 mb-6 border border-[#30363d]">
                        <p className="text-sm text-[#008f11] mb-2 font-mono">const userId =</p>
                        <p className="text-4xl font-bold text-[#00ff41] font-mono">
                            "{id}"
                        </p>
                    </div>

                    <p className="text-[#008f11] mb-8 leading-relaxed font-mono text-sm">
                        This demonstrates dynamic routing in React Router. The <code className="bg-[#30363d] px-2 py-1 rounded text-[#00ff41]">:id</code> parameter
                        is captured from the URL using the <code className="bg-[#30363d] px-2 py-1 rounded text-[#00ff41]">useParams</code> hook.
                    </p>

                    {/* Example Links */}
                    <div className="space-y-4">
                        <p className="text-sm text-[#008f11] font-medium font-mono">
                            // Try these example routes:
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                to="/user/123"
                                className="bg-[#00ff41] text-[#0d1117] hover:bg-[#008f11] px-4 py-2 font-bold transition-colors duration-300"
                            >
                                /user/123
                            </Link>
                            <Link
                                to="/user/hitesh"
                                className="border border-[#30363d] text-[#00ff41] hover:bg-[#30363d] px-4 py-2 font-bold transition-colors duration-300"
                            >
                                /user/hitesh
                            </Link>
                            <Link
                                to="/user/react-router"
                                className="border border-[#30363d] text-[#1f6feb] hover:bg-[#30363d] px-4 py-2 font-bold transition-colors duration-300"
                            >
                                /user/react-router
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Technical Explanation */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-[#0d1117] p-6 border border-[#30363d]">
                        <h3 className="text-lg font-bold text-[#00ff41] mb-3 border-b border-[#30363d] pb-2">
                            &gt; Route_Definition
                        </h3>
                        <div className="bg-black text-[#00ff41] p-4 rounded-none border border-[#30363d] font-mono text-sm overflow-x-auto">
                            {`// In routes.jsx
{
  path: 'user/:id',
  element: <User />
}`}
                        </div>
                    </div>

                    <div className="bg-[#0d1117] p-6 border border-[#30363d]">
                        <h3 className="text-lg font-bold text-[#00ff41] mb-3 border-b border-[#30363d] pb-2">
                            &gt; Parameter_Access
                        </h3>
                        <div className="bg-black text-[#00ff41] p-4 rounded-none border border-[#30363d] font-mono text-sm overflow-x-auto">
                            {`// In User.jsx
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  return <div>User ID: {id}</div>
}`}
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="text-center mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-[#00ff41] hover:text-[#008f11] font-bold transition-colors duration-300"
                    >
                        <span className="mr-2">&lt;</span>
                        cd ..
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User
