import React, { useEffect, useState } from 'react';
import { Grommet, Main, Box } from 'grommet';
import Register from './components/Register';
import Dev from './components/Dev';
import api from './services/api';

function App() {

  const [devs, setDevs] = useState([]);

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    };

    loadDevs();

  }, []);

  return (
    <Grommet theme={theme} full>

      <Main pad="large">
        <Box direction='row' pad='medium'>

          <Box pad='small'>
            <Register />
          </Box>

          <Box pad='small'>
            {
              devs.map((dev) => (
                <>
                  <h1>{dev.github_username}</h1>
                  <Dev dev={dev} />
                </>
              ))
            }
          </Box>
        </Box>

      </Main>

    </Grommet>
  );
}

export default App;
