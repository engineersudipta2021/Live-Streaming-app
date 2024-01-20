import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [value,setValue] = useState();
    const navigate = useNavigate();
    const handleClick = () =>{
          navigate(`/Live-vedio-call/${value}`)
    }

  return (
    <div>
      <h5>Right now ,Here you can type any unique three number digit as code id,that is accepted at this Moment.</h5>
    <div style={{display:'flex',justifyContent:'center',marginTop:"50px"}}>
     <input type="text" placeholder='enter your code id' onChange={(e)=>setValue(e.target.value)} />
     <button onClick={handleClick}>Join In vedio call</button>
    </div>
    </div>
  )
}

export default Home
