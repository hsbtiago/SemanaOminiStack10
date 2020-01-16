import React from 'react';
import { Grommet, Main, Box } from 'grommet';
import Register from './Register';
import Devs from './Devs';

function App() {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme} full>

      <Main pad="large">
        <Box direction='row' pad='medium'>

          <Box pad='small'>
            <Register />
          </Box>

          <Box pad='small'>
            <Devs/>
          </Box>
        </Box>

      </Main>

    </Grommet>
  );
}

export default App;
