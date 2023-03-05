import * as React from 'react'
import {
  Input,
  HStack,
  Center,
  VStack,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Textarea,
  Stack,
  Text,
  Spacer,
  Circle,
  LinkBox,
  LinkOverlay,
  Box,
  Tag,
  Image,
  Skeleton,
} from '@chakra-ui/react'
import imageToBase64 from 'image-to-base64/browser'
import LocationLogo from '../components/LocationLogo';
import SvgCompanyLogo from '../components/CompanyLogo';
import SvgDollarSignSvgrepoCom from '../components/DollarLogo';
import { Formik, Field } from 'formik'
import NavBar from '../components/NavBar'

const CreateJob = () => {

  const [job, setJob] = React.useState({})

  const handleUpload = (e) => {
    var file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setJob({
        company_logo: reader.result
      })
      console.log("done", reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  return (
    <>
      <NavBar />
      <Tabs bgColor={'gray.100'} align='center'>
        <TabList>
          <Tab>Job Details</Tab>
          <Tab>Job Preview</Tab>
        </TabList>
        <Center bgColor={'gray.100'}>


          <TabPanels>
            <TabPanel>
              <Flex shadow={'base'} borderRadius={'md'} justify='center' align='center' bgColor={'white'} p='5'>
                <Formik
                  initialValues={{
                    title: '',
                    type: '',
                    location: '',
                    salary_start: 0,
                    salary_end: 0,
                    company_name: '',
                    company_logo: '',
                    apply_link: '',
                    description: '',
                    tags: []
                  }}
                  onSubmit={values => {
                    alert(JSON.stringify(values, null, 2))
                    setJob(values)
                  }}
                >
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={4} w={'2xl'} align="flex-start">
                        <FormControl isRequired>
                          <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="title">Job Title</FormLabel>
                          <Field
                            as={Input}
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="type">Type</FormLabel>
                          <Field
                            as={Select}
                            id="type"
                            name="type"
                            type="text"
                            onChange={handleChange}
                          >
                            <option >Select Option</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Internship">Internship</option>
                            <option value="Contract">Contract</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Volunteer">Volunteer</option>
                            <option value="Freelance">Freelance</option>

                          </Field>
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="location">Location</FormLabel>
                          <Field
                            as={Input}
                            id="location"
                            name="location"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <HStack spacing={4}>
                          <FormControl>
                            <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="salary_start">Salary (Min)</FormLabel>
                            <Field
                              as={Input}
                              id="salary_start"
                              name="salary_start"
                              type="number"
                              onChange={handleChange}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="salary_end">Salary (Max)</FormLabel>
                            <Field
                              as={Input}
                              id="salary_end"
                              name="salary_end"
                              type="number"
                              onChange={handleChange}
                            />
                          </FormControl>
                        </HStack>
                        <FormControl >
                          <FormLabel fontWeight={'semibold'} fontSize={'sm'} htmlFor="company_name">Company Name</FormLabel>
                          <Field
                            as={Input}
                            id="company_name"
                            name="company_name"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontWeight={'semibold'} fontSize={'sm'} htmlFor="company_logo">Company Logo</FormLabel>
                          <Field
                            as={Input}
                            id="company_logo"
                            name="company_logo"
                            type="file"
                            onChange={handleUpload}
                            variant="none"
                          />
                        </FormControl>
                        <FormControl isRequired>
                          <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="apply_link">Apply Link</FormLabel>
                          <Field
                            as={Input}
                            id="apply_link"
                            name="apply_link"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="description">Description</FormLabel>
                          <Field
                            as={Textarea}
                            id="description"
                            name="description"
                            type="text"
                            size=""
                            onChange={handleChange}
                          />
                        </FormControl>
                        {/* <FormControl>
                                                    <FormLabel fontWeight='semibold' fontSize={'sm'} htmlFor="tags">Tags</FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="tags"
                                                        name="tags"
                                                        type="text"
                                                        onChange={handleChange}
                                                    />
                                                </FormControl> */}
                        <Button colorScheme={'blue'} type="submit">Save And Continue</Button>
                      </VStack>
                    </form>
                  )}
                </Formik>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Skeleton isLoaded={job.title !== undefined}>
                <LinkBox variant='' key={job.id} href={job.apply_link}>

                  {/* Stack of 2 elements: Image and Box */}
                  <Stack bg={'white'} direction={'row'} w='3xl' spacing={'-4'} borderRadius='md' shadow={'base'} >
                    {job.company_logo ? (<Image
                      borderRadius='full'
                      boxSize='10'
                      verticalAlign={'middle'}
                      src={job.company_logo}
                      alt='Organisation Logo'
                    />) : (<Circle size={'16'} m={'5'} bg='gray.50' ><SvgCompanyLogo /></Circle>)}

                    {/* Details of the job */}
                    <Box w='inherit' p={'5'}>

                      {/* Title and type tag */}
                      <LinkOverlay href={job.apply_link} isExternal>
                        <Flex>
                          <Text fontSize='xl'>{job.title}</Text>
                          <Spacer />
                          {job.type !== 'Not mentioned' && job.type ? (<Tag fontWeight={'extrabold'}>{job.type}</Tag>) : null}
                        </Flex>
                      </LinkOverlay>

                      {/* Location with logo */}
                      <Stack direction={'row'} spacing={2}><LocationLogo /><Text>{job.location}</Text></Stack>

                      {/* Salary */}
                      {job.salary_end ? (<Stack direction={'row'}><SvgDollarSignSvgrepoCom /><Text>{job.salary_start} - {job.salary_end}K</Text></Stack>) : null}

                      {/* Tags */}
                      {job.tags ? (<Stack direction={'row'} spacing={2}>{job.tags.map((tag, index) => (<Tag key={index} variant={'outline'}>{tag}</Tag>))}</Stack>) : null}

                    </Box>
                  </Stack>
                </LinkBox>

                {/* TODO: Add a button to post the job to database */}
                <Button colorScheme={'blue'} mt='5' type='submit' >Post</Button>
              </Skeleton>
            </TabPanel>
          </TabPanels>
        </Center>
      </Tabs>

    </>
  )
}

export default CreateJob