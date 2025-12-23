import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("https://ebook-backenddd.onrender.com/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you Here! :) </h1>
        <p className='mt-12'>
        A bookstore is a cozy haven for book lovers, offering a wide range of titles across genres, from timeless classics to the latest bestsellers. It's a place where readers can browse shelves lined with stories, ideas, and knowledge, often discovering hidden gems. Many bookstores also feature quiet reading nooks, friendly staff, and the warm scent of paper and coffee, creating a welcoming atmosphere for anyone seeking inspiration or a good read.
        </p>
        <Link to="/"> <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 p-3'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Course
