import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className='logo font-bold text-lg'>
                <Link href={"/"}>Linkify</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/about"} ><li>About</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>
                <Link href={"/shorten"}><li>Shorten</li></Link>
                <li className='flex gap-3'>
                    <Link href={"/shorten"}><button className='bg-purple-500 rounded-lg p-3 py-1'>Try it Now!</button></Link>
                    <Link href={"/github"}><button className='bg-purple-500 rounded-lg p-3 py-1'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar