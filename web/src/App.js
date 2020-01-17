import React, { useEffect, useState } from 'react';
import { Grommet, Main, Box, Grid } from 'grommet';
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


  async function AddDev(dev)  {
    
    const response = await api.post('/devs', dev);
    setDevs([...devs, response.data]);

  };

  useEffect(() => {

    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
      console.log(devs);
    };

    loadDevs();

  }, []);

  return (
    <Grommet theme={theme} full>

      <Main pad="large">

        <Grid
          rows={['large']}
          columns={['medium', 'xlarge']}
          gap="medium"
          areas={[
            { name: 'register', start: [0, 0], end: [1, 0] },
            { name: 'devs', start: [1, 0], end: [1, 0] },
          ]}
        >
          <Box gridArea="register">
            <Register onSubmit={AddDev}/>
          </Box>

          <Box gridArea="devs" direction='row' wrap='true' gap='medium'>
            {
              devs.map((dev) => (
                <Dev dev={dev} />
              ))
            }
          </Box>

        </Grid>

      </Main>

    </Grommet>
  );
}

export default App;
