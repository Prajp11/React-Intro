import React, {useState} from "react";

const FunctionComponent = ({name, age, author, setname }) => {
    const [count, setcount] = useState(0);
    const [changename, setchangename] = useState("XYZ");
    const reduceCount = () =>{
        setcount(count -1)
    }
return(
    <div>
        <p>This is Functional Component</p>
        <button onClick={()=>setcount(count +1)}>Add by 1</button>    (First method of calling function on same line//)
        <button onClick={reduceCount}>Subtract by 1</button>          (Second method where we called it seperately//)
        <h2>{count}</h2>
        <h4>My company is:{name} it is of {age} years old and author is {author}</h4>
        {/* {<input onChange={(e)=> setchangename(e.target.value)} /> } */}
        <input onChange={(e)=> setchangename(e.target.value)} />
        <button onClick={()=> setname(changename)}>Change name to ---</button>

    </div>
)
}
export default FunctionComponent;