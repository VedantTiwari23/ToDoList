import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Todoprovider } from './contexts'
import { TodoForm, TodoItem } from './Components'

//NOTE: TODOS EK ARRAY HAI OR TODO OBJECT TO CREATECONTEXT ME PASS KIYE HAI
function App() {
  //todos jo context se aa rhe hai usko tho khi na khi rkhoge taki ui baad me change kr ske
  const [todos,setTodos]=useState([]);

  //ab fuctionality dalne ke liye jo variable wha likhe the wohi same likhna hai
  //ye todo ke andar ek string value hai jo form ke andar se millega  "todos" se nhi aaiya hai todos ke andar sb kuch hai arr+function

  const addTodo=(todo)=>{

    //Yha todo banana hoga context me hamlog todo ko as a object banaiye hai uske andar id hai todo hai or complete hai
    //todo apne app me ek object hai to jo baki value hai wo copy ho jaiyega
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updateTodo=(id,todo)=>{

    setTodos((prev)=>(prev.map((prevTodo)=>prevTodo.id==id ? todo: prevTodo)))//dusra waala id hai jo updateTodo se gya hai
    //ID MIL GYA HAI TO NAYA TODO DAAL RHE HAI WRNA WOHI PREVTODO PASS KR RHE HAI
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>(prev.filter((prevTodo)=>prevTodo.id==id)))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed: !prevTodo.completed}:prevTodo))//agr true hai to completed ke andar jo bhi value hai wo change ho jaiyega true->false and vise versa isiliye hamlog "!" use kiye hai
  }
  //local storge me ja kr saari values le kr aao jo hai uske andar or usko is todos me insert kr do

  useEffect(()=>{
    
    const tod=JSON.parse(localStorage.getItem("todos"))//getItem ke andar string pass kr rhe hai
    //localSotrage.getItem value as a stirnf dega usko hamlog ko JSON me convert krna hoga

    if(tod &&tod.length>0){
      //
      setTodos(tod)
    }

  },[])

  //JAB BHI KUCH VALUE TODOS ME AAIYEGA HAMME USKO LOCAL STORAGE ME DALNA HAI USKE LIYE OR EK USEEFFECT LE RHE HAI
  //HAMLOG PICHLA USEEFFECT ME BHI KR SKTE THE LKIN YE MORE OPTIMISED WAY HAI
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    //wha jo ek varible me TodoContext.Provider likhe the wohi hai or ye values provide krega
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem  todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
