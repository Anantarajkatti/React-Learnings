import React, { useCallback, useState } from 'react'
import Child from './Child'

function UseCallBackParent() {
    const [c1,setC1]=useState(0)
    const [c2, setC2]=useState(0)

    const fun=()=>{
        console.log("hello parent")
    }
     // every time child  re renders bcz state change/ prop changes   in parent-- it will be prevented by using memo(Child)

     // but when  a function is passed as props 
    // for each time component create new reference to "fun"  but setC2 reference remain same
    // to prevent creating new reference useCallback is used

// const fun=useCallback(()=>{
//     console.log("hello parent")
// },[])   // this empty array says refer to same 



  return (
    <div>Parent
    <Child c2={c2} setC2={setC2} fun={fun}/>
    <h2>{c1}</h2>
    <button onClick={()=>setC1(c1+1)}>increses</button>
    </div>
  )
}

export default UseCallBackParent