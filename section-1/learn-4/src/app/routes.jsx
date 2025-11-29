import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'

// Lazy load components
const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const Github = lazy(() => import('../pages/Github/Github'))
const User = lazy(() => import('../pages/User/User'))

const LoadingFallback = () => (
    <div className="flex items-center justify-center h-screen bg-[#0d1117] text-[#00ff41] font-mono">
        <span className="animate-pulse">&gt; Loading module..._</span>
    </div>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Home />
                    </Suspense>
                )
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: 'contact',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: 'github',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Github />
                    </Suspense>
                ),
                loader: async () => {
                    const response = await fetch('https://api.github.com/users/itsjayeshp')
                    if (!response.ok) {
                        throw new Error('Failed to fetch GitHub data')
                    }
                    return response.json()
                }
            },
            {
                path: 'user/:id',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <User />
                    </Suspense>
                )
            }
        ]
    }
])
