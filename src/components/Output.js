import React from 'react';
// import PropTypes from 'prop-types';

function Output(props) {
    return (
      <div className="output">
        {`${props.calculation.total || ''} ${props.calculation.operation || ''} ${props.calculation.next || ''}`}
      </div>
    );
}

// Output.propTypes = { state: PropTypes.string.isRequired };

export default Output;
