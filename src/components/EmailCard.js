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
import { createClient } from '@supabase/supabase-js'

const EmailCard = () => {
	const supabaseUrl = process.env.GATSBY_SUPABASE_URL
	const supabaseKey = process.env.GATSBY_SUPABASE_KEY
	// const supabaseKey = ''
	const supabase = createClient(supabaseUrl, supabaseKey)

	const toast = useToast();

	return (
		<Formik
			initialValues={{ 'email': '' }}
			onSubmit={(values, actions) => {
				setTimeout(async () => {
					const { data, error } = await supabase
						.from('emails')
						.insert([
							values
						])
						.select();
					if (data) {
						toast({
							title: `${data[0]['email']} is now subscribed to job alerts`,
							description: 'You will receive an email when a new job is posted',
							status: 'success',
							duration: 5000,
							isClosable: true,
						})
					}
					else {
						toast({
							title: "Error",
							description: `${JSON.stringify(error)}`,
							status: "error",
							duration: 9000,
							isClosable: true,
						})
					}
					actions.setSubmitting(false);
					// console.log(values)
				}, 1000);
			}}
		>
			{(props) => (
				<Form>
					<Field name='email'>
						{({ field, form }) => (
							<FormControl isRequired bgColor='white' margin={'7'} padding={'5'} boxShadow='base' borderRadius={'md'} w={['xs','sm', 'lg', 'xl', '4xl']}>
								<FormLabel fontSize={'2xl'} fontWeight={'extrabold'}>Job Alerts</FormLabel>
								<Stack direction={['column', 'row']} spacing={4}>
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
		</Formik >
	);
};

export default EmailCard