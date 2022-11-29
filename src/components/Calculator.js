import React from 'react';
import Output from './Output';
import ButtonsBox from './ButtonsBox';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Output />
        <ButtonsBox />
      </div>
    );
  }
}

export default Calculator;
