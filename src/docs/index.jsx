import React from 'react';
import { render } from 'react-dom';
import { Box } from '../lib/index';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>
      Demo with examples of the component
      </h1>
      <Box
        title="Filters"
        boxColor="primary"
        expandable
      >
        <button type="button" className="btn btn-primary">
Primary
        </button>
      </Box>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
