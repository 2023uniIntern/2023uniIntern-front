import React from 'react'

const Header = () => {
    return (
        <header>

            <div className=" grid grid-cols-12 flex justify-between items-center p-3">


                {/* 로고 */}
                <div className="col-span-2">
                    <p className="text-xl font-semibold text-gray-800">uni Intern</p>
                </div>

                {/* 버튼 */}
                <div className="col-span-10 items-center space-x-1 ml-10">
                    <a href="/" className="py-2 px-2 text-gray-400 hover:text-gray-800">홈</a>
                    <a href="/" className="py-2 px-2 text-gray-400 hover:text-gray-800">CCTV</a>
                    <a href="/" className="py-2 px-2 text-gray-400 hover:text-gray-800">발생현황</a>
                    <a href="/" className="py-2 px-2 text-gray-400 hover:text-gray-800">구조도</a>
                </div>

            </div>
            {/* 밑줄 */}
            <div className="mt-3 w-full border-t-4 border-gray-500" />

        </header>

    )
}

export default Header