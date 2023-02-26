import * as React from 'react';
import { InputLeftElement, InputGroup, Stack, Button, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';

const EmailCard = () => {
    return (
            <FormControl bgColor='white' margin={'7'} padding={'5'} boxShadow='base' borderRadius={'md'} w={'61.8vw'}>
                <FormLabel fontSize={'2xl'} fontWeight={'extrabold'}>Job Alerts</FormLabel>
                <Stack direction={'row'} spacing={4}>
                    <InputGroup>
                        <InputLeftElement children={<EmailIcon />} />
                    <Input placeholder='mail@example.com' type='email' />
                    </InputGroup>
                    <Button colorScheme='blue' >Subscribe</Button>
                </Stack>
                <FormHelperText>Get jobs delivered to your Inbox</FormHelperText>
            </FormControl>
    );
};

export default EmailCard