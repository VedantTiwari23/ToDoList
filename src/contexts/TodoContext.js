import React,{createContext, useContext} from "react";

export const TodoContext=createContext({
    //Todos ke andar functionality likh rhe hai for ex ek empty func iske andr bna denge or uske andar ka code jha useContext ho rha hai wha likhenge
    
    //jab bhi context ka access milega to component koi bhi ho VALUE YHI SE LUNGA
    todos:[
        {
            id:1,
            todo:"Todo MSg",
            completed:false
        },
    ],
    //naya todo add krne ke liye page pr
    addTodo: (todo)=>{},
    //upadte krne ke liye or update krne ke liye uska id chaiye hoga is liye wo bhi pass kr rhe hai
    updateTodo:(id,todo)=>{},
    //same goes for delete
    deleteTodo:(id)=>{},
    
    //isme koi todo complete hoone ke baad change krega css
    toggleComplete:(id)=>{}

    
})

//Hamlog har jada agr context ko use krna hai to har file me useContext likhne ke wajah ye kr de rhe hai
export const useTodo=()=>{
    return useContext(TodoContext)
}

//Main file ke andar ja kr Todocontext.Provider likhne ke jagah ye krte hai
export const Todoprovider=TodoContext.Provider
