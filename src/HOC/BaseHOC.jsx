import React from "react";

const BaseHOC = (Component) => ({...props}) => {
    return (
        <div>
            <h1>This is our navbar</h1>   (Line 6 and line 8 are duplicate lines or same piece of code so we are using ...props //)
            <Component {...props} />
            <h1>This is our footer</h1>
        </div>
    )

};

export default BaseHOC;