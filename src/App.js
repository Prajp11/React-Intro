import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionComponent from './pages/FunctionComponent';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// ReactJS Layouts
import BaseHOC from './HOC/BaseHOC';



function App() {
  const author ="Prajwal";
  const [name, setname] = useState("ABC");

  return (
    <Routes>
      <Route path='/' element={<BaseHOC><ClassComponent /></BaseHOC>}/>            (Wrapping up of route//)
      <Route path='/functional-component' element={<BaseHOC><FunctionComponent 
      name ={name}
      age ={10}
      author ={author}
      setname ={setname}
      /></BaseHOC>}/>

    </Routes>
    
  );
}

export default App;
