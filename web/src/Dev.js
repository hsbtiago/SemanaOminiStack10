import React from 'react';
import { Box, Heading, Paragraph, Image, Button, Text } from 'grommet';
import { Github } from 'grommet-icons';

const Dev = (props) => (
    <Box pad='medium' elevation='medium'>

        <Box direction='row'>

            <Box height='xsmall' width='xsmall'>
                <Image
                    fit='contain'
                    src='https://avatars3.githubusercontent.com/u/15053038?s=460&v=4'
                />
            </Box>

            <Box height='xsmall' margin={{left: '10px', top: 'none', bottom: 'none'}}>
                <Heading level='4' margin='none' >
                    Tiago Bernardo
                </Heading>
                <Text color='grey'>
                    c#, aspnet, mvc, vue, node, react, javascript
                </Text>
            </Box>
        </Box>

        <Box>

            <Paragraph>
                olá, meu nome é tiago  esta e minha bio. texto complementar aqui top da baladeira para testar o react
            </Paragraph>

            <Button
                icon={<Github />}
                label="Github"
                onClick={() => { }}
            />

        </Box>

    </Box>
);

export default Dev;