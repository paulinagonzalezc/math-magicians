import React from 'react';
import PropTypes from 'prop-types';

function Output(props) {
  return (
    <div className="output">
      {`${props.calculation.total || ''} ${props.calculation.operation || ''} ${props.calculation.next || ''}`}
    </div>
  );
};

Output.propTypes = { calculation:PropTypes.shape({total:PropTypes.string, operation:PropTypes.string, next:PropTypes.string}) };

export default Output;
