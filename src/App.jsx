import React ,{useState} from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [error, setError] = useState('')
  
  function titleHandler(e){
    if(e.target.value.length<=20){
      setTitle(e.target.value)
    }
    


  }

  function detailsHandler(e){
    setDetails(e.target.value)
  }

  

  function submitHandler(e) {
    e.preventDefault()
    
    if(title === "" && details === ""){
      setError("Please enter atleast 1 input")
      return;
    }
    
    setError('')

    setTask(prev=>[...prev,{id:Date.now(),title,details}]);

    setDetails('')
    setTitle('')
    
   
  }

  function deleteHandler(id){

     

      setTask(prev=>prev.filter(task=> task.id != id))

      
  }

  return (
    <div className='min-h-screen bg-black text-white lg:flex'>
      
      <form className='flex flex-col lg:w-1/2 items-start px-15 py-10 gap-4 ' onSubmit={(e)=>{submitHandler(e)}}>
        
        <h1 className='text-3xl font-bold'> Your Notes</h1>
        <input  className="border-2 rounded-2xl font-medium  px-5 py-3 outline-none w-full" placeholder='Enter the title' type="text" value={title} onChange={function(e){titleHandler(e)}}></input>
        {title.length === 20&&(<p className='text-red-400 text-sm'>Max allowed is 20 charcters</p>)}
        <textarea className="border-2 rounded-2xl  w-full h-30 px-5 py-3 outline-none font-medium"   placeholder="Enter the Details" type="text" value={details} onChange={function(e){detailsHandler(e)}}></textarea>
        <button  className="border-2 rounded-2xl w-full px-5 py-3 font-medium bg-white text-black active:scale-90" >ADD</button>
        {error && (<p className='text-red'>{error}</p>)}
          
      </form>

      <div className="flex flex-col gap-5 lg:w-1/2 p-10 lg:border-l-2 overflow-scroll">
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5'>
          {task.map(function(elem){
            return(
            <div key={elem.id} className="bg-white h-50 w-60 px-3 py-3  text-black flex flex-col justify-between">
              <h1 className='font-bold text-2xl leading-tight mb-2'>{elem.title}</h1>
              <p>{elem.details}</p>
              <button onClick={()=>{deleteHandler(elem.id)}} className='bg-red-600 p-2 m-2'>Delete</button>
              
            </div>
            ) 
          })}
            
        </div>
        

      </div>
    </div>
  )
}

export default App