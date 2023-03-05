import * as React from 'react';
import {
	InputLeftElement,
	InputGroup,
	Stack,
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	FormErrorMessage,
	useToast,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Field, Form, Formik } from 'formik';

const EmailCard = () => {
	const toast = useToast();
	return (
		<Formik
			initialValues={{'email': ''}}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					fetch('https://nocodb.server.sakuto.in/nc/aijobs_or0b/api/v1/emails', {
						method: 'POST',
						headers: {
							'accept': 'application/json',
							'xc-auth': process.env.XC_AUTH,
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(values),
					})
						.then((response) => response.json())
						.then((data) => {
							toast({
								title: `${data.email} is now subscribed to job alerts`,
								description: 'You will receive an email when a new job is posted',
								status: 'success',	
								duration: 5000,
								isClosable: true,
							})
						});
					actions.setSubmitting(false);
					// console.log(values)
				}, 1000);
			}}
		>
			{(props) => (
				<Form>
					<Field name='email'>
						{({ field, form }) => (
							<FormControl isRequired bgColor='white' margin={'7'} padding={'5'} boxShadow='base' borderRadius={'md'} w={'61.8vw'}>
								<FormLabel fontSize={'2xl'} fontWeight={'extrabold'}>Job Alerts</FormLabel>
								<Stack direction={'row'} spacing={4}>
									<InputGroup>
										<InputLeftElement children={<EmailIcon />} />
										<Input {...field} placeholder='mail@example.com' type='email' />
									</InputGroup>
									<Button colorScheme='blue' type='submit' isLoading={props.isSubmitting}>Submit</Button>
								</Stack>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
								<FormHelperText>Get jobs delivered to your Inbox</FormHelperText>

							</FormControl>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	);
};

export default EmailCard