import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0d1117] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-[#0d1117]">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
