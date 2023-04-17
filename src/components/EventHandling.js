import React, { useState } from 'react'

const EventHandling = () => {

    const [count, setCount] = useState(0); 
    const [img,setImg] = useState('');   

    // let count=0; 

    const addCount = () => {
        // count++; ❌
        setCount(count+1); //✅
        console.log(count);
    }

    const uploadImage = (e) => {
        const file = e.target.files[0];
        console.log(file.name);
        const fr = new FileReader();

        fr.onload =(f) => {
            console.log(f);
            setImg(f.target.result);
        };

        fr.readAsDataURL(file);
    }

  return (
    <div>
        <h1>Event Handling</h1>
        <hr />
        <button className='btn btn-primary' onClick={ () => {alert('Knock Knock!!😎')}}>Click Event Handling</button>
       
        <input type='text' onChange={(e) => {console.log(e.target.value)}} />

        <input type='file' onChange={uploadImage}/>
        <br/>
        <button className='btn btn-danger mt-4' onClick={addCount}>Add Count</button>
        <h1>🔼{count}</h1>

        <img src={img} alt=""/>
    </div>
  )
}

export default EventHandling;