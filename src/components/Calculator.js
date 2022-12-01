import React from 'react';
import Output from './Output';
import ButtonsBox from './ButtonsBox';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    console.log('click');
    const values = calculate(this.state, event.target.innerText);
    this.setState(values);
  };

  render() {
    return (
      <div className="calculator">
        <Output state={this.state}/>
        <ButtonsBox handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
