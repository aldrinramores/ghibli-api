import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';


const FilmsDetails = () => {

   
 // PARAM ID
 const { id } = useParams()
 // BASE URL
 const ghibliAPI = `https://ghibliapi.herokuapp.com/films/${id}`;
  const [item, setitems] = useState({})

     useEffect(()=>{
        fetchData();
     }, [])
    const fetchData = async () =>{
        axios.get(ghibliAPI)
        .then(res =>{
            setitems(res.data)
            console.log(res);
        })
        .catch(err =>{
            console.error(err)
        })
    }
  return (
    <div className='relative h-[100vh] w-[100vw] overflow-hidden '>
      <div className="fd-banner"></div>
      <Link to={'/films'}><button className='absolute top-2 left-2 z-50 text-white'><FaArrowLeft className='fa-xl' /></button></Link>

        <img src={item.movie_banner} className="absolute h-[100vh] w-full object-cover object-top  z-10" />

        <div className="div flex flex-wrap justify-center gap-0 md:gap-10 max-w-6xl items-center absolute bottom-0 top-0 left-0 right-0  mx-auto  z-20 text-white ">
          <img className=' w-[270px]  md:w-[300px] lg:w-[400px] rounded-md drop-shadow-lg mx-2' src = {item.image}/>
            <div className="max-w-xl md:max-w-sm ">
              <p className='text-white  text-xl md:text-2xl mb-2 mx-2'>{item.title}</p>
                <p className='text-white text-justify text-lg md:text-base mx-2'>{item.description}</p>
            </div>
        </div>
      

    </div>
  )
}

export default FilmsDetails