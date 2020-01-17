import React from 'react';
import { Box, Heading, Paragraph, Image, Button, Text } from 'grommet';
import { Github } from 'grommet-icons';

const Dev = (props) => (
    <Box pad='medium' elevation='medium' width='500px' height='300px' margin="{top: 100px}" >

        <Box direction='row'>

            <Box height='xsmall' width='xsmall'>
                <Image
                    fit='contain'
                    src={props.dev.avatar_url}
                />
            </Box>

            <Box height='xsmall' margin={{left: '10px', top: 'none', bottom: 'none'}}>
                <Heading level='4' margin='none' >
                    {props.dev.name}
                </Heading>
                <Text color='grey'>
                    {
                       props.dev.techs.map(tech => (
                           <span> {tech} </span>
                       ))
                    }
                </Text>
            </Box>
        </Box>

        <Box>

            <Paragraph>
                {props.dev.bio}
            </Paragraph>

            <Button
                icon={<Github />}
                label="Github"
                onClick={`https://github.com/${props.dev.github_username}`}
            />

        </Box>

    </Box>
);

export default Dev;