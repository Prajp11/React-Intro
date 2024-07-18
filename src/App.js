import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';

function App() {
  return (
    <div className="App">
      
       <p> ClassComponent </p>
      <ClassComponent></ClassComponent>
      <br />

      <p>Function Component</p>
      <FunctionComponent />
      {/* <FunctionComponent />
      <FunctionComponent />
      <FunctionComponent /> */}

    </div>
  );
}

export default App;
