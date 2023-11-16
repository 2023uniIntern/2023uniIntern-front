import React from 'react'

const Header = () => {
    return (
        <header>
            <div className=" grid grid-cols-12 flex justify-between items-center">
                {/* 로고 */}
                <div className="col-span-2">
                    <p className="cursor-default text-xl font-bold text-gray-800">UNI company</p>
                    <p className="cursor-default text-sm text-gray-600">internship</p>
                </div>
                {/* 버튼 */}
                <div className="col-span-10 text-sl items-center space-x-1">
                    <a href="/" className="px-3 text-gray-400 hover:text-gray-800">홈</a>
                    <a href="/" className="px-3 text-gray-400 hover:text-gray-800">CCTV</a>
                    <a href="/" className="px-3 text-gray-400 hover:text-gray-800">발생현황</a>
                </div>
            </div>
            {/* 밑줄 */}
            <div className="mt-3 w-full border-t-4 border-gray-400" />
        </header>
    )
}

export default Header