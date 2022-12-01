import React from 'react';

function Output(props) {
  return (
    <div className="output">
      {`${props.calculation.total || ''} ${props.calculation.operation || ''} ${props.calculation.next || ''}`}
    </div>
  );
};

export default Output;
