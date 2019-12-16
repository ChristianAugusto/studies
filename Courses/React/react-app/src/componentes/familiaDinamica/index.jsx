
import React from "react";

export default props => (
  <ul>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, {...props})
    })}
    {/* {React.cloneElement(props.children, {...props})} */}
  </ul>
);