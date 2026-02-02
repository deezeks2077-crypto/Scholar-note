import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import UpdateProfile from './UpdateProfile';

const page = async () => {
    const session = await auth()
    // console.log(session);

    if (!session) {
        redirect("/auth/signin")
    }

    return (
        <main className='min-h-dvh'>
            <section className='shadow-lg max-w-2xl p-6 mx-auto my-10'>
                <h1 className='md:text-5xl text-center font-bold text-gray-900 mb-10'>My Account</h1>

                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-2xl font-semibold text-gray-800'>
                        {session.user.name}
                    </h1>
                    <p className='text-xl font-light text-gray-800'>
                        {session.user.email}
                    </p>

                    <img src={session.user.image} alt={session.user.name.slice(0, 2).toUpperCase()} className='w-50 h-50 rounded-full' />

                    <form action={async () => {
                        "use server"
                        await signOut()
                    }}>
                        <button type="submit" className='bg-red-600 px-20 py-2 text-white text-xl rounded-md cursor-pointer hover:bg-red-700 transition-all duration-200'>Sign Out</button>
                    </form>
                </div>
                    <UpdateProfile session={session}/>
            </section>

        </main>
    )
}

<<<<<<< HEAD
export default page
=======
export default page
>>>>>>> b439a9d0621a3ea8508f611ebf20d98dd894d7a4
