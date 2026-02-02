"use client";
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase';
import { RiLoader2Fill } from "react-icons/ri";
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';



const Client = ({ session }) => {

  const [sending, setSending] = useState(false)
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  const iv = {
    title: "",
    category: "",
    note: ""
  }

  const formValidation = Yup.object({
    title: Yup.string().required("This is a required field").max(100, "Max of 100 characters"),
    category: Yup.string().required("This is a required field"),
    note: Yup.string().required("This is a required field")
  })

  return (
    <main className='min-h-dvh p-3'>
      <h1 className='md:max-w-2xl text-center text-2xl md:text-3xl text-gray-700 mx-auto font-bold my-10'>Fill out the form below to contribute to our fast growing community of Researchers</h1>

      <section className='md:max-w-2xl w-full mx-auto'>
        <Formik
          initialValues={iv}
          validationSchema={formValidation}
          onSubmit={async (values, { resetForm }) => {
            const dbObject = {
              ...values,
              userId: session.user.id,
              image: session.user.image,
              author: session.user.name,
              timestamp: new Date().toLocaleDateString()
            }

            try {
              setSending(true)
              const docRef = await addDoc(collection(db, "researches"), dbObject);
              handleClick({ vertical: 'top', horizontal: 'right' })
            } catch (error) {
              console.error("An error occurred", error)
              alert("An error occurred while uploading.")
            } finally {
              setSending(false)
            }

            // console.log("Document written with ID: ", docRef.id);
            // console.log(dbObject);
            resetForm();

          }}
        >
          <Form className='shadow-lg rounded-md p-6 space-y-5'>
            <div className='flex flex-col'>
              <label htmlFor="" className='text-sm text-gray-600 mb-2'>Research Title</label>
              <Field name="title" placeholder="Enter Research Title..." className="w-full border outline-none px-3 py-2 border-gray-300 rounded-md" />
              <ErrorMessage name='title' component={"p"} className='text-sm text-red-500 mt-2' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="" className='text-sm text-gray-600 mb-2'>Select Category</label>
              <Field name="category" component="select" className="w-full border outline-none px-3 py-2 border-gray-300 rounded-md">
                <option value="" disabled>Choose...</option>
                <option value="marketing">Marketing</option>
                <option value="politics">Politics</option>
                <option value="health">Health</option>
                <option value="programming">Programming</option>
                <option value="technology">Technology</option>
                <option value="recipes">Recipes</option>
                <option value="military">Military</option>
                <option value="history">History</option>
                <option value="movies">Movies</option>
                <option value="music">Music</option>
              </Field>
              <ErrorMessage name='category' component={"p"} className='text-sm text-red-500 mt-2' />
            </div>

            <div>
              <label htmlFor="" className='text-sm text-gray-600 mb-2'>Research Note</label>
              <Field name="note" as="textarea" rows="10" placeholder="Enter Research Note..." className="w-full border outline-none px-3 py-2 border-gray-300 rounded-md" />
              <ErrorMessage name='note' component={"p"} className='text-sm text-red-500 mt-2' />
            </div>

            <button disabled={sending} type='submit' className='bg-orange-600 w-full flex items-center justify-center text-white p-3 rounded-md gap-2 font-semibold hover:bg-orange-700 transition-all duration-200'>
              {
                sending ?
                  <span className='flex items-center justify-center gap-1'>
                    <RiLoader2Fill className='animate-spin text-xl' />
                    Sending...
                  </span> :
                  <span className='flex items-center justify-center gap-1'>
                    Upload Research
                    <FaPaperPlane />
                  </span>
              }
            </button>

            {/* <button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
            Top-Right
          </button> */}

          </Form>
        </Formik>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Successfully Submitted!!!"
          key={vertical + horizontal}
        />
      </section>
    </main>
  )
}

export default Client
