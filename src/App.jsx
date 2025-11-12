import React from 'react'

const App = () => {
  function submitHandler(e) {
    e.preventDefault()
    console.log("form Submitted")


  }
  return (
    <div className='h-screen bg-black text-white lg:flex'>
      
      <form className='flex flex-col lg:w-1/2 items-start px-15 py-10 gap-4 ' onSubmit={(e)=>{submitHandler(e)}}>
        
        <h1 className='text-3xl font-bold'> Your Notes</h1>
        <input  className="border-2 rounded-2xl font-medium  px-5 py-3 outline-none w-full" placeholder='Enter the title' type="text"></input>
        <textarea className="border-2 rounded-2xl  w-full h-30 px-5 py-3 outline-none font-medium"   placeholder="Enter the Details" type="text"></textarea>
        <button className="border-2 rounded-2xl w-full px-5 py-3 font-medium bg-white text-black">ADD</button>
      </form>

      <div className="flex flex-col gap-5 lg:w-1/2 p-10 lg:border-l-2">
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5'>
        <div className="bg-white h-32 w-32 p-10 "></div>
        <div className="bg-white h-32 w-32 p-10 "></div>
        <div className="bg-white h-32 w-32 p-10 "></div>
      
        </div>
        

      </div>
    </div>
  )
}

export default App