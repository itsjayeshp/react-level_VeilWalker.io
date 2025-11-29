import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-4 terminal-text-shadow">
                        &gt; GitHub_Integration
                    </h1>
                    <p className="text-xl text-[#008f11]">
                        // Real-time data fetching via loaders...
                    </p>
                </div>

                {/* GitHub Profile Card */}
                <div className="bg-[#0d1117] border border-[#30363d] shadow-[0_0_15px_rgba(0,255,65,0.1)] overflow-hidden">
                    <div className="md:flex">
                        {/* Profile Image */}
                        <div className="md:w-1/3 bg-[#0d1117] p-8 flex items-center justify-center border-r border-[#30363d]">
                            <div className="relative">
                                <img
                                    src={data.avatar_url}
                                    alt={data.login}
                                    className="w-48 h-48 rounded-none border-2 border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.3)] grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute -bottom-4 -right-4 text-[#00ff41] text-xs font-mono bg-[#0d1117] border border-[#30363d] px-2 py-1">
                                    ID: {data.id}
                                </div>
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="md:w-2/3 p-8">
                            <div className="mb-6 border-b border-[#30363d] pb-4">
                                <h2 className="text-3xl font-bold text-[#00ff41] mb-2">&gt; {data.name}</h2>
                                <p className="text-xl text-[#1f6feb] mb-4">@{data.login}</p>
                                <p className="text-[#008f11] leading-relaxed font-mono">"{data.bio}"</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-[#0d1117] border border-[#30363d] p-4 text-center hover:border-[#00ff41] transition-colors">
                                    <p className="text-2xl font-bold text-[#00ff41]">{data.public_repos}</p>
                                    <p className="text-xs text-[#008f11] uppercase">Repos</p>
                                </div>
                                <div className="bg-[#0d1117] border border-[#30363d] p-4 text-center hover:border-[#00ff41] transition-colors">
                                    <p className="text-2xl font-bold text-[#00ff41]">{data.followers}</p>
                                    <p className="text-xs text-[#008f11] uppercase">Followers</p>
                                </div>
                                <div className="bg-[#0d1117] border border-[#30363d] p-4 text-center hover:border-[#00ff41] transition-colors">
                                    <p className="text-2xl font-bold text-[#00ff41]">{data.following}</p>
                                    <p className="text-xs text-[#008f11] uppercase">Following</p>
                                </div>
                                <div className="bg-[#0d1117] border border-[#30363d] p-4 text-center hover:border-[#00ff41] transition-colors">
                                    <p className="text-2xl font-bold text-[#00ff41]">{data.public_gists}</p>
                                    <p className="text-xs text-[#008f11] uppercase">Gists</p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-[#008f11] mb-6 font-mono">
                                <div className="flex items-center">
                                    <span className="mr-2 text-[#1f6feb]">[company]</span>
                                    <span>{data.company || 'null'}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-[#1f6feb]">[location]</span>
                                    <span>{data.location || 'null'}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-[#1f6feb]">[blog]</span>
                                    <span>{data.blog || 'null'}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-[#1f6feb]">[twitter]</span>
                                    <span>{data.twitter_username ? `@${data.twitter_username}` : 'null'}</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-[#0d1117] py-3 px-6 font-bold transition-all duration-300"
                            >
                                <span className="mr-2">open_profile.exe</span>
                                <span>_</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technical Details */}
                <div className="mt-8 bg-[#0d1117] border border-[#30363d] p-6">
                    <h3 className="text-xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-2 inline-block">
                        &gt; System_Log
                    </h3>
                    <p className="text-[#008f11] mb-4 font-mono text-sm">
                        [INFO] React Router `loader` initiated.<br />
                        [INFO] Fetching data from GitHub API...<br />
                        [SUCCESS] Data rendered successfully.
                    </p>
                    <div className="bg-black border border-[#30363d] p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-[#00ff41]">
                            {`// In routes.jsx
loader: async () => {
  const response = await fetch('https://api.github.com/users/itsjayeshp')
  return response.json()
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github
