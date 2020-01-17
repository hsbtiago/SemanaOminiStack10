import React, { useState, useEffect } from 'react';
import { Box, FormField, Form, Button, Heading, TextInput } from 'grommet';
import { Save } from 'grommet-icons';
import api from '../../services/api';

function Register(props) {

    const [github_username, setGithub_Username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(

            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);

                console.log(position.coords);

            },
            err => console.log(err),
            {
                timeout: 30000
            });


    }, []);

    async function SubmitForm(e){
        
        e.preventDefault();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithub_Username('');
        setTechs('');
    }

    return (

        <Box
            pad='medium'
            elevation='medium'
            width='medium'
            {...props}
        >

            <Form onSubmit={SubmitForm}>

                <Heading level='3'>
                    Cadastrar Dev
                </Heading>

                <FormField label="Github Username">
                    <TextInput value={github_username} onChange={e => setGithub_Username(e.target.value)} />
                </FormField>

                <FormField label="Tecnologias">
                    <TextInput value={techs} onChange={e => setTechs(e.target.value)} />
                </FormField>

                <FormField label="Latitude">
                    <TextInput value={latitude} onChange={e => setLatitude(e.target.value)} />
                </FormField>

                <FormField label="Longitude">
                    <TextInput value={longitude} onChange={e => setLongitude(e.target.value)} />
                </FormField>

                <Button type="submit" primary label="Salvar" icon={<Save />} />

            </Form>

        </Box >
    );
}

export default Register;