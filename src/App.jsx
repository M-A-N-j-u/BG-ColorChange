 import { useState } from 'react';
import './App.css'

function App() {
  let BlurryWood = '#DEB887';
  const [bgColor,setBgColor] =useState(BlurryWood)
   const bgChange=(e)=>{
     const {value} = e.target;
     console.log(`${value}`);
     if(value ==='orange'){
       let Orange ='#FFA500'
       setBgColor(orange)
        // console.log(bgColor);
     }else if(value==='green'){
       let Green ='#008000'
       setBgColor(Green)
     }else if(value==='violet'){
       let Violet ='#8F00FF'
       setBgColor(Violet)
     }else{
       let Blue='#0000FF'
       setBgColor(Blue)
     }
   }

  return (
    <div className='d-flex justify-content-between align-items-center text-center'>
     <div style={{height:'500px',backgroundColor: bgColor}} className='container d-flex justify-content-center align-items-center text-light w-75 rounded flex-column mt-5'>
          <h2 className='fs-1 fw-bold'>BackGround Color Change</h2>
          <div className='mt-3'>
            <button value='orange' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light me-2'>Orange</button>
            <button value='green' onClick={e=>bgChange(e)}  className='btn rounded-pill btn-light me-2'>Green</button>
            <button value='violet' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light me-2'>Violet</button>
            <button value='blue' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light'>Blue</button>
          </div>
      </div>
    </div>
  )
}

export default App

