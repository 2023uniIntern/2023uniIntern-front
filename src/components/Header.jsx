import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-xl font-semibold text-gray-700">
                            <a href="/" className="text-gray-800">uni Intern</a>
                        </div>
                      
                        <div class="hidden md:flex items-center space-x-1 ml-10">
                            <a href="/" className="py-2 px-2 text-gray-700 hover:text-gray-800">홈</a>
                            <a href="/" className="py-2 px-2 text-gray-700 hover:text-gray-800">CCTV</a>
                            <a href="/" className="py-2 px-2 text-gray-700 hover:text-gray-800">발생현황</a>
                            <a href="/" className="py-2 px-2 text-gray-700 hover:text-gray-800">구조도</a>
                        </div>
                    </div>
                 
                 
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                              
                                <path d="M4 5h16M4 11h16M4 17h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header