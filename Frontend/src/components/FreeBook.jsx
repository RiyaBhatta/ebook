import React from 'react'
import List from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("https://ebook-back.onrender.com/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(res.data)
        setBook(data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
    const filterData = List.filter((data)=>data.category==="Free");

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>The library offered a selection of free books to encourage reading in the community. Each visitor could choose a story to take home and enjoy without spending a dime.</p>
      </div>
    <div>
    <Slider {...settings}>
      {book.map((item)=>(
        <Cards item = {item} key={item.id}></Cards>
      ))}
    </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook
