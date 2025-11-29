import React, { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'itsjayeshp' // keep this constant so it's easy to change


const Github = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProfile = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
            if (!res.ok) {
                throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
            }
            const json = await res.json()
            setData(json)
        } catch (err) {
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <div className="text-center py-8">Loading GitHub profile…</div>
    if (error)
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Failed to load profile</h2>
                    <p className="text-sm text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={fetchProfile}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                    >
                        Retry
                    </button>
                </div>
            </div>
        )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <img
                            src={data.avatar_url}
                            alt={data.login}
                            className="w-20 h-20 rounded-full mr-4 border-2 border-orange-500"
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
                            <p className="text-gray-600">@{data.login}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 mb-4">{data.bio}</p>

                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="font-semibold text-gray-800">{data.public_repos}</p>
                            <p className="text-sm text-gray-600">Repositories</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p className="font-semibold text-gray-800">{data.followers}</p>
                            <p className="text-sm text-gray-600">Followers</p>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-6 bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition duration-300"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Github
