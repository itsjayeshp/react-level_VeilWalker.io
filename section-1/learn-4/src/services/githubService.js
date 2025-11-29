export const githubService = {
    async getUserData(username) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data')
        }
        return response.json()
    },

    async getUserRepos(username) {
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repositories')
        }
        return response.json()
    }
}
