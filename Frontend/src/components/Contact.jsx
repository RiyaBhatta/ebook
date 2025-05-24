import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").closest()}>✕</Link>
    </form>
    <h3 className="font-bold text-lg">Contact Us</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-50 px-3 py-1 border rounded-md outline-none' {...register("email", {required: true})}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br />
        <input type="text" placeholder='Enter your message' className='w-50 px-3 py-1 border rounded-md outline-none' {...register("message", {required: true})}/>
        <br />
        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer'>Submit</button>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Contact
