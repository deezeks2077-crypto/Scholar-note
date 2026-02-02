"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "next-auth/react"


const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const { data: session } = useSession();
    // console.log(session);

    const navLinks = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "Contact",
            url: "/contact"
        },
        {
            label: "Library",
            url: "/resources"
        },
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className='sticky top-0 z-50'>
            <nav className='flex items-center justify-between md:px-10 p-3 py-3 shadow-md relative bg-white'>
                <Link href={"/"} className='flex items-center gap-1 z-50'>
                    <Image src={"/logo.png"} alt='logo' width={500} height={500} className='w-10 h-10' />
                    <p className='max-md:hidden'>ScholarNote</p>
                </Link>

                <div className='ml-auto flex items-center gap-10 max-md:hidden'>
                    {
                        navLinks.map((item, index) => (
                            <Link key={index} href={item.url} className='hover:text-orange-600 transition-all duration-200'>{item.label}</Link>
                        ))
                    }
                </div>

                {
                    session ? <div className='max-md:ml-auto'>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className='ml-10'
                        >
                            <Avatar alt={session?.user?.name} src={session?.user?.image} />
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href={"/profile"}>My Profile</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href={"/contribute"}>Contribute</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <button onClick={() => signOut()}>Sign Out</button>
                            </MenuItem>
                        </Menu>
                    </div>
                        : <Link href={"/auth/signin"} className='ml-10 border px-4 py-1 flex items-center gap-1 hover:text-orange-600  transition-all duration-200 max-md:ml-auto z-50'><FiUser /> <p className='max-md:hidden'>Sign In</p></Link>
                }

                {/* mobile and tablet navbar */}
                <div className={`h-dvh bg-white lg:hidden w-full absolute top-0 left-0 flex-col items-center gap-10 pt-20 ${openNav ? "flex" : "hidden"} `}>
                    {
                        navLinks.map((item, i) => (
                            <Link key={i} href={item.url}>{item.label}</Link>
                        ))
                    }
                </div>

                <button onClick={() => { setOpenNav(!openNav) }} className='md:hidden ml-3 text-xl z-50'>
                    {
                        openNav ? <IoMdClose /> : <HiMenuAlt3 />
                    }
                </button>
            </nav>
        </section>
    )
}

export default Navbar
