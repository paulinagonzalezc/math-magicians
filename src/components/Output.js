import React from 'react';
// import PropTypes from 'prop-types';

const Output = (props) => {
    return (
      <div className="output">
        {`${props.calculation.total || ''} ${props.calculation.operation || ''} ${props.calculation.next || ''}`}
      </div>
    );
}

// Output.propTypes = { state: PropTypes.string.isRequired };

export default Output;
