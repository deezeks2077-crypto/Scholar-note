import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <main className='border-t border-gray-200 md:px-20 md:py-4 p-3 flex max-lg:flex-col max-lg:gap-6 items-center justify-between'>
            <Link href={"/"} className='flex items-center gap-1'>
                <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10' />
                <p>ScholarNote</p>
            </Link>

            <div className='text-sm space-x-5 text-gray-600 max-md:flex max-md:flex-col gap-5 max-md:items-center'>
                <Link href={"#"} className='hover:underline'>Terms of Use</Link>
                <Link href={"#"} className='hover:underline'>Privacy Policy</Link>
                <Link href={"#"} className='hover:underline'>Bug Bounty</Link>
                <Link href={"#"} className='hover:underline'>FAQs</Link>
            </div>

            <div className='flex items-center gap-3 text-xl'>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
            </div>
        </main>
    )
}

export default Footer
