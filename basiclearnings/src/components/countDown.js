// use Effects runs after the render/ re render

// if [] empty dependency is given the use Effect runs once  the first render happens
// after that though components rerender useeffect wont execute

//the execution of use effect orderis child useeffect runs first then parent useEffect runs

//state change causes rerenders


import React, { useEffect, useRef, useState } from 'react'

function CountDown() {
   const[count,setCount]=useState(10)
   console.log("re render is happening")

   useEffect(()=>{
      
    console.log("effect run in comp 1")

    let interval= setInterval(
        ()=>{
            setCount((prevCount)=>{
                if(prevCount<=0){
                    clearInterval(interval)
                    return 0
                }
                   
                else
                 return prevCount -=1
            })
        },1000
    )
        
   return ()=> clearInterval(interval)

   },[])

   
    


  return (
    <div>
        <h2>countDown</h2>
         <div>{count}</div>
         <CountDownRef/>
    </div>
  )
}

export default CountDown


function CountDownRef() {
    const[count,setCount]=useState(10)
    let coutRef= useRef(10)
    console.log("re render is happening wit reference")
 
    useEffect(()=>{
       
     console.log("effect run comp 2")
 
     let interval= setInterval(
         ()=>{
            if(coutRef.current===0){
                clearInterval(interval)
                return
            }
            coutRef.current -=1
             setCount(coutRef.current)
         },1000
     )
         
    return ()=> clearInterval(interval)
 
    },[])
 
    
     
 
 
   return (
     <div>
         <h2>countDown with Reference</h2>
          <div>{count}</div>
     </div>
   )
 }
 
