import React from "react";
import Output from "./Output";
import ButtonsBox from "./ButtonsBox";

class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
        return (
          <div className="calculator">
            <div className="wrapper">
                <Output />
                <ButtonsBox /> 
            </div>
          </div>
        );
  }
};

export default Calculator;