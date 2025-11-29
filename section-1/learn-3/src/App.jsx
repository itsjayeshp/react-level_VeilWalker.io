import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'         // useEffect version (alternative)
import User from './components/User/User'
import NotFound from './components/NotFound/NotFound'
import ErrorPage from './components/ErrorPage/ErrorPage'

// === Alternative approach: createRoutesFromElements (clean, element-based) ===
// This is the "commented alternative" approach from your original code,
// made coherent and improved with an errorElement and a NotFound route.

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {/* The commented alternative used loader here — since the alternative Github
          component uses useEffect, we do not attach a loader. If you prefer the
          loader approach, you can replace this element with a loader-based one. */}
            <Route path="github" element={<Github />} />

            <Route path="user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

export default function App() {
    return <RouterProvider router={router} />
}
