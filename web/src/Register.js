import React from 'react';
import { Box, FormField, Form, Button, Heading } from 'grommet';
import {Save} from 'grommet-icons';

const Register = (props) => (

    <Box
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        {...props}
    >
        <Form>
            <Heading level='3'>
                Cadastrar Dev
            </Heading>

            <FormField name="github_username" label="Github Username" required='true' />

            <FormField name="techs" label="Tecnologias" required='true' />

            <FormField name="latitude" label="Latitude" required='true' />

            <FormField name="longitude" label="Longitude" required='true' />

            <Button type="submit" primary label="Salvar" icon={<Save/>}/>
        </Form>

    </Box >
);

export default Register;