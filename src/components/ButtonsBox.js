import React from "react";

class ButtonsBox extends React.Component {
  render() {
        return (
          <div className="buttons">
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button className="operator">÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="operator">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="operator">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="operator">+</button>
            <button className="span-two">0</button>
            <button>.</button>
            <button className="operator">=</button>
          </div>
        );
  }
};

export default ButtonsBox;