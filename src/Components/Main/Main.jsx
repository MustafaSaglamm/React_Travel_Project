import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/pexels-dan-grab-775687.jpg'
import img2 from '../../Assets/pexels-donald-tong-58557.jpg'
import img3 from '../../Assets/pexels-emrah-ayvali-6440808.jpg'
import img4 from '../../Assets/pexels-j-r-8861427.jpg'
import img5 from '../../Assets/pexels-marcel-winger-2445852.jpg'
import img6 from '../../Assets/pexels-michael-giugliano-2998786.jpg'
import img7 from '../../Assets/pexels-olga-lioncat-7245240.jpg'
import img8 from '../../Assets/pexels-petkevich-evgeniy-9955064.jpg'
import img9 from '../../Assets/pexels-pixabay-261181.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
},


{
  id:2,
  imgSrc: img2,
  destTitle: 'Bali',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX',
  fees: '$850',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
                
},

{
  id:3,
  imgSrc: img3,
  destTitle: 'Eskişehir',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$650',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:4,
  imgSrc: img4,
  destTitle: 'Santorini',
  location: 'Greece',
  grade: 'CULTURAL RELAX',
  fees: '$750',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:5,
  imgSrc: img5,
  destTitle: 'Cario',
  location: 'Egypt',
  grade: 'CULTURAL RELAX',
  fees: '$580',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:6,
  imgSrc: img6,
  destTitle: 'Amalfi',
  location: 'Italy',
  grade: 'CULTURAL RELAX',
  fees: '$720',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:7,
  imgSrc: img7,
  destTitle: 'Berlin',
  location: 'Germany',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:8,
  imgSrc: img8,
  destTitle: 'Kiev',
  location: 'Ukraine',
  grade: 'CULTURAL RELAX',
  fees: '$750',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},

{
  id:9,
  imgSrc: img9,
  destTitle: 'Bodrum',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt reprehenderit est dignissimos dolores aperiam architecto. Soluta hic fugiat nulla.'
},


]

const Main = () => {
  //Create a react hook to add a scroll animation part.
useEffect(()=>{
  Aos.init({duration: 2000})
},[])


  return (
   <section className='main container section'>
    <div className="secTitle">
      <h3 data-aos="fade-right" className="title">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
return( 
  <div key={id} 
  data-aos="fade-up"
  className="singleDestination">
      
      <div className="imageDiv">
        <img src={imgSrc} alt=
        {destTitle} />
      </div>

      <div className="cardInfo">
        <h4 className="destTitle">{destTitle}</h4>
        <span className="continent flex">
        <HiOutlineLocationMarker className='icon'/>
        <span className="name">{location }</span>
        </span>

        <div className="fees flex">
          <div className="grade">
            <span>{grade}</span>
          </div>
          <div className="price">
            <h5>{fees}</h5>
          </div>
        </div>

        <div className="desc">
          <p>{description}</p>
        </div>

        <button className='btn flex'>
          DETAILS <HiOutlineClipboardCheck className="icon"/>
        </button>
      </div>
  </div>
)
          })
        }
    </div>

   </section>
  )
}

export default Main