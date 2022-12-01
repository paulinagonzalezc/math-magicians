import React from 'react';

class Output extends React.PureComponent {
  render() {
    const { total, next, operation } = this.props.state;
    return (
      <div className="output">
        {`${total || ''} ${operation || ''} ${next || ''}`}
      </div>
    );
  }
}

export default Output;
