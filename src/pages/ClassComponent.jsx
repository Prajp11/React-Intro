import React from 'react';
import BaseHOC from '../HOC/BaseHOC'; // we have to import BaseHOC in our class and Function Components otherwise it will throw error.

class ClassComponent extends React.Component{
  constructor(props){
    super(props)         //if you want to call constructor - like default or parameter constructor we used super to call parent constructor.//
                         //And make sure that there will not any set of intructions on the top of super.
    this.state = {       //this.state is one where will be storing certain information.
      name: "Prajwal",
      age: 22
    }
  }
render(){
    return (
          <>
          <p> This is Class Components </p>
          </>                                       
          // This '<></>' is called fragment we used here cause in case of major projects we dont use multiple div tags there //

  );
}
}
export default BaseHOC(ClassComponent); // we wrapped-up 'Classcomponent' here cause this became now child of BaseHOC so we add it in brackets //