import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center 
        gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            onClick={()=> {return setColor("red")}}
            >
            Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}
            onClick={()=> {return setColor("blue")}}
            >
            Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            onClick={()=> {return setColor("green")}}
            >
            Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"olive"}}
            onClick={()=> {return setColor("olive")}}
            >
            Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"#212121"}}
            onClick={()=> {return setColor("#212121")}}
            >
            Mate</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"gray"}}
            onClick={()=> {return setColor("gray")}}
            >
            Gray</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}
            onClick={()=> {return setColor("pink")}}
            >
            Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"purple"}}
            onClick={()=> {return setColor("purple")}}
            >
            Purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"yellow"}}
            onClick={()=> {return setColor("yellow")}}
            >
            Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"lavender"}}
            onClick={()=> {return setColor("lavender")}}
            >
            Lavender</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            onClick={()=> {return setColor("black")}}
            >
            Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}
            onClick={()=> {return setColor("white")}}
            >
            White</button>
            
        </div>  
      </div>
    </div>
  )
}

export default App
