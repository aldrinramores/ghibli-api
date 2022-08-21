import React from 'react'
import { Link } from "react-router-dom";
import videoBg from '../assets/vid.mp4';
import ghibli from '../assets/logoo.png';

const Main = () => {
  return (
    <div className='body'>
      <div className="relative h-[100vh] w-[100%] overflow-hidden">
          <video className='object-center h-[100vh] w-[100vw] object-cover z-0' src={videoBg} autoPlay loop muted/>
              <div className=" black-overlay absolute  h-[100vh]  w-[100vw] z-10 top-0"></div> 
          <div className="flex flex-wrap flex-col items-center justify-center  absolute w-100 h-100 left-0 right-0 top-52  z-40">
            <div className="left flex flex-col items-center ">
              <img src={ghibli} className="w-[500px]" />
            </div>
            <Link to={"/films"}>
              <span className='discover text-white text-2xl md:text-4xl drop-shadow-xl p-4 cursor-pointer' >DISCOVER FILMS</span>
            </Link>
          </div>
  
           <div className="description absolute bottom-1 text-white z-40 text-center text-xs flex flex-wrap flex-col items-center justify-center  w-100 h-100 left-0 right-0  ">
        
                <p>GHIBLI-FILMS-API | Background: <a className='text-white underline' href="https://www.youtube.com/watch?v=z9Ug-3qhrwY&t=109s">Youtube</a> | All the images and information belong to the respective owners | Usage: Non-Commercial | Made by: &nbsp;
                <a className='underline' href="https://github.com/aldrinramores">Aldrin</a></p>
            </div>
         
      </div>          
    </div>
  )
}

export default Main