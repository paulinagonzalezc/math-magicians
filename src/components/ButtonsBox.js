import React from 'react';

class ButtonsBox extends React.PureComponent {
  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.handleClick} type="submit">AC</button>
        <button onClick={this.props.handleClick} type="submit">+/-</button>
        <button onClick={this.props.handleClick} type="submit">%</button>
        <button onClick={this.props.handleClick} type="submit" className="operator">÷</button>
        <button onClick={this.props.handleClick} type="submit">7</button>
        <button onClick={this.props.handleClick} type="submit">8</button>
        <button onClick={this.props.handleClick} type="submit">9</button>
        <button onClick={this.props.handleClick} type="submit" className="operator">x</button>
        <button onClick={this.props.handleClick} type="submit">4</button>
        <button onClick={this.props.handleClick} type="submit">5</button>
        <button onClick={this.props.handleClick} type="submit">6</button>
        <button onClick={this.props.handleClick} type="submit" className="operator">-</button>
        <button onClick={this.props.handleClick} type="submit">1</button>
        <button onClick={this.props.handleClick} type="submit">2</button>
        <button onClick={this.props.handleClick} type="submit">3</button>
        <button onClick={this.props.handleClick} type="submit" className="operator">+</button>
        <button onClick={this.props.handleClick} type="submit" className="span-two">0</button>
        <button onClick={this.props.handleClick} type="submit">.</button>
        <button onClick={this.props.handleClick} type="submit" className="operator">=</button>
      </div>
    );
  }
}

export default ButtonsBox;
