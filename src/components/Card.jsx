// import React from 'react'
import './Card.css'
import { useState } from 'react'
const Card = () => {
    const [noOfLikes, setNoOfLikes]= useState(0)
    const [checkClick, setCheckClick] = useState(false)

    // let totalLikes =0

    // const increaseLikes= ()=>{
    //     totalLikes= totalLikes + 1;
    //     console.log(totalLikes)
    // }
    const updateLikes = ()=>{
        const add =  noOfLikes + 1
            setNoOfLikes(add)  
            setCheckClick(true)
               
    }
   

    

  return (
    <div>
        <div className="card-wrap">
            <img src="/img-two.png"/>
            <div className='card-content'>
                <div className={checkClick? `like-icon bg-red`: `like-icon`} onClick={updateLikes}>Like</div>
                {/* <p>{totalLikes}</p> */}
                <p>{noOfLikes}</p>
            </div>

        </div>
    </div>
  )
}

export default Card