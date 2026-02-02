'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { RiLoader2Fill } from "react-icons/ri";
import { doc, deleteDoc } from "firebase/firestore";

const Client = ({ session }) => {

    const uid = session.user.id;
    // console.log(uid);    

    const [resources, setResources] = useState([]);
    const [fetching, setfetching] = useState(true);

    const handleFetch = async () => {
        try {
            const userInput = []
            const querySnapshot = await getDocs(collection(db, "researches"))
            querySnapshot.forEach((doc) => {
                const libraryObject = {
                    postId: doc.id,
                    ...doc.data()
                }
                userInput.push(libraryObject)
            })

            setResources(userInput)
            // console.log(resources);
            setfetching(false);
        } catch (error) {
            console.error("An error occurred", error)
            alert("Something went wrong")
        }
    }

    useEffect(() => { handleFetch(); }, [resources])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "researches", id));
        } catch (error) {
            console.error("An error occurred while deleting", error)
            alert("Something went wrong")
        }
    }

    return (
        <main className='min-h-dvh max-lg:p-3'>
            <h1 className='capitalize text-center md:mt-10 mt-3 font-bold text-2xl md:text-3xl lg:w-1/2 mx-auto text-gray-900'>
                a centralized access point for research papers, data sets, tools and references to support discoveries
            </h1>

            {
                fetching ? <span className='flex items-center justify-center gap-1 md:mt-20 mt-6'><RiLoader2Fill className='text-3xl animate-spin text-center' /> <p>Fetching data...</p> </span> :
                    <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:p-10 p-3'>
                        {
                            resources.map((item, index) => (

                                <div key={index} className='md:p-6 p-3 rounded-md shadow-md hover:-translate-y-2 transition-all duration-200 hover:shadow-xl'>
                                    <div>
                                        <blockquote className='flex items-center justify-between'>
                                            <span className='flex items-center gap-1'>
                                                <img src={item.image} alt={item.author} className='w-10 h-10 rounded-full' />
                                                <p className='text-xl font-semibold text-gray-800'>{item.author}</p>
                                            </span>
                                            {
                                                item.userId == uid &&
                                                <button onClick={() => handleDelete(item.postId)}>
                                                    <IoTrashOutline />
                                                </button>
                                            }
                                        </blockquote>

                                        <article className='flex items-center flex-col gap-2 my-4'>
                                            <h1 className='font-bold text-2xl uppercase text-center'>{item.title}</h1>
                                            <p className='bg-orange-200 px-4 py-1 text-sm rounded-full'>{item.category}</p>
                                            <p className='line-clamp-7 font-light text-lg'>
                                                {item.note}
                                            </p>
                                        </article>

                                        <blockquote className='flex items-center justify-between'>
                                            <p className='text-xs text-gray-800'>Posted on {item.timestamp}</p>
                                            <Link className='flex items-center hover:underline text-blue-600' href={`/resources/${item.postId}`}>Read More <GoArrowUpRight /></Link>
                                        </blockquote>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
            }

        </main>
    )
}

export default Client
