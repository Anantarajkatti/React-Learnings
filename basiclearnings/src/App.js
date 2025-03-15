import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.js';
import CrudHome from './Crudcomponents/crudHome.js';
import CountDown from './components/countDown.js';


// React
//Virtual -Dom
//it is lightweight JS representation of DOM
// react first updates v-Dom then DOM is updated based on the difference
// difference is seen by Diffing Algorithm
//reconciliation : re rendering is after update of differences

// React Architecture
// it is component based architecture : UI is built using  reusable & independent component
// these components can be functional and can be class based

// key parts of React Architecture
// 1) Component
// 2) State and props
// 3) React recociliation : efficiently updates only necessary UI updates 

function App() {
  return (
    <div className="App">
   
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<Home/>}/>
      </Routes> 
    </BrowserRouter> 
    <CrudHome/> 
    <CountDown/>
    
    </div> 
  );
}

export default App;


