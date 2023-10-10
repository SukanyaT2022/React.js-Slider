import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaRegDotCircle, } from 'react-icons/fa';
import './Slider.css';

const data = [
  {
    id: 1,
    name: 'banana',
    description: 'desscription banana is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    image:
      'https://images.pexels.com/photos/13211456/pexels-photo-13211456.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'apple',
    description: 'desscription apple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    image:
      'https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'pineapple',
    description: 'desscription pineapple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    image:
      'https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'orange',
    description: 'desscription orange is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
    image:
      'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Slider = () => {
  //use state to hold index id 1 id 2 id 3

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlider = () => {
setCurrentIndex((valpre)=>(valpre===0)? data.length-1 : valpre - 1)
//if (valpre===0) is true then data.length-1 : valpre - 1) - will work
  };

  const nextSlider = () => {
    setCurrentIndex((valnext)=>(valnext===data.length -1) ? 0 : valnext + 1)
    //strep 1 check length-(valpre===data.length -1) ? 0 : valpre+1) means if infront true 
    //srep 2 if have opsition 0 to 3 then  add 1 everytiem click- then ? : ternary operator 
  
    //data = [a,b,c,d]
    //data[0] = a
    //data[1] = b
    //data[2] = c
    //data[3] = d
    //data.length = 4
    //-1 so sraet 0 to 3 not 4

  };



  return (
    <>
      <div className="wholeWrapper">
        <div className="mainTextImage">

<div className='text'>
<h1>{data[currentIndex].name}</h1>
<p>{data[currentIndex].description}</p>
</div>

<div className='image'>
    <img src={data[currentIndex].image} alt={data[currentIndex].name}/>
</div>

        </div>

        {/* control button */}
        <div className='wholeButton'>
          <button onClick={previousSlider}><FaArrowLeft/></button>
          <button onClick={nextSlider}><FaArrowRight/></button>
        </div>

        {/* dash */}
        <div className='dash'>
        <p onClick={()=>setCurrentIndex(0)}><FaRegDotCircle/></p>
        <p onClick={()=>setCurrentIndex(1)}><FaRegDotCircle/></p>
        <p onClick={()=>setCurrentIndex(2)}><FaRegDotCircle/></p>
        <p onClick={()=>setCurrentIndex(3)}><FaRegDotCircle/></p>
        </div>
      </div>
    </>
  );
};

export default Slider;
