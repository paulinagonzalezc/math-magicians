import React from 'react';
import PropTypes from 'prop-types';

const Output = (props) => {
  <div className="output">
    {`${props.calculation.total || ''} ${props.calculation.operation || ''} ${props.calculation.next || ''}`}
  </div>;
};

Output.propTypes = { calculation: PropTypes.objectOf(PropTypes.object()) };

export default Output;
