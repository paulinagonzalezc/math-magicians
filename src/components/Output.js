import React from 'react';

class Output extends React.PureComponent {

  render() {
    const { state } = this.props;
    const { total, next, operation } = state;
    return (
      <div className="output">
        {`${total || ''} ${operation || ''} ${next || ''}`}
      </div>
    );
  }
}

export default Output;
