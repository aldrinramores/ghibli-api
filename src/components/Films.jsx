
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import kiki from '../assets/kiki.png';

// BASE URL
const ghibliAPI = "https://ghibliapi.herokuapp.com/films";


const Films = () => {
  // RENDER ON LOAD PAGE
  useEffect(()=>{
    fetchData();
  }, [])
  // CYCLE THROUGH API DATA ARRAYS
  const [items, setItems] = useState([]);
  // FETCH
   const fetchData = async () =>{
    axios.get(ghibliAPI)
    .then(res =>  {
      setItems(res.data)
      console.log(res);
    })
    .catch(err =>{
      console.error(err);
    })
   }; 
  
  

  return (
    <>
      <div className=" ">
        <h1 className='text-center f-title p-10 text-6xl md:text-8xl text-white'>Ghibli Films</h1>
        <p className='f-main-card text-center text-white p-2 text-xl'>Visit Official Ghibli Site: <a className='text-slate-900' href="https://www.ghibli.jp/">Click Here</a></p>
      
      </div>
      <div className='flex flex-wrap justify-around mx-auto pt-20 f-main-card '>
      
            {items.map(item =>(
              <Link to={`/films/${item.id}`}>
                <div className="mx-2 mb-8 f-card-holder relative ">
                  <img key={item.id} src={item.image} className="f-card "/>
                    <div className="f-kiki ">
                      <img src={kiki} className="h-24" />
                      <p className='text-white font-bold text-lg drop-shadow-xl'>{item.title}</p>
                    </div>
                 
                </div>
              </Link>
          ))}
       
      </div>
     
    </>
    
  );
}

export default Films