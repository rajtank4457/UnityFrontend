'use client'
import Image from 'next/image'
import logo from '../images/logoss1.png'

export default function Header() {

    return (

        <div className="flex items-center justify-between py-0 px-6 pr-[200px]">
            <a href="/">
                <Image
                    src={logo}
                    className="w-30 h-[120px] object-contain py-5 "
                    alt=""
                />
            </a>

            <div className=" lg:flex space-x-6 text-white ">
                <a href="/Download" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Download</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Nitro</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Discover</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Safety</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Support</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Blog</a>
                <a href="/" className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 ">Careers</a>

            </div>
            <button className="bg-white text-black p-2  ml-[50px] rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-mediu">Open Unity Talk</button>

        </div>
        
        
    )   
}
