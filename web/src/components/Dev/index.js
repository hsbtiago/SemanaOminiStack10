import React from 'react';
import { Box, Heading, Paragraph, Image, Button, Text } from 'grommet';
import { Github, FormTrash } from 'grommet-icons';

function Dev({ dev, onRemove }) {

    async function HandleRemoveDev(e){
        
        e.preventDefault();
        await onRemove(dev);

    }

    return (
        <Box pad='medium' elevation='medium' width='500px' height='300px' margin="{top: 100px}" >

            <Box direction='row'>

                <Box height='xsmall' width='xsmall'>
                    <Image
                        fit='contain'
                        src={dev.avatar_url}
                    />
                </Box>

                <Box height='xsmall' margin={{ left: '10px', top: 'none', bottom: 'none' }}>
                    <Heading level='4' margin='none' >
                        {dev.name}
                    </Heading>
                    <Text color='grey'>
                        {
                            dev.techs.map(tech => (
                                <span> {tech} </span>
                            ))
                        }
                    </Text>
                </Box>
            </Box>


                <Paragraph>
                    {dev.bio}
                </Paragraph>

            <Box direction='row' justify='center'>

                <Button
                    icon={<Github />}
                    label="Github"
                    href={`https://github.com/${dev.github_username}`}
                    target='_blank'
                />

                <Button
                    icon={<FormTrash/>}
                    onClick={HandleRemoveDev}
                    color="status-critical"
                    label="Remover"
                />

            </Box>

        </Box>
    )
}

export default Dev;