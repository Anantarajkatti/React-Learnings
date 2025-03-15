// use Effect is used to cause side effects
// it runs after the render
// can be used : Application
  // 1) fetching data : api calls should run after rendering ( so keeping initial state empty and when fetch is successful the state changes re render happensa gain)
  //2) Updating dom
  //3) setting up subscription
  //4) handling timers
//Cases :
//1)useEffect(()=>{},[])----- useeffects runs only Once
//2)useEffect(()=>{},[dependencies])----- UE run on dependecy change
//3)clean up-- is function that useEffect returns
    // useEffect(()=>{
        
    //return ()={}  // removes side Effects when component unmounts  // this is generally used to clear intralvals,timeouts, event listeners
    //})
import React from 'react'


function UseEffect() {
  return (
    <div>Useeffect</div>
  )
}

export default UseEffect