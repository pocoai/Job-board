import * as React from 'react'
import NavBar from '../components/NavBar'
import EmailCard from '../components/EmailCard'
import {
  Wrap,
  VStack,
  Stack,
  Flex,
  Text,
  Spacer,
  Circle,
  LinkBox,
  LinkOverlay,
  Box,
  Tag,
  Image,
  Button
} from '@chakra-ui/react'
import LocationLogo from '../components/LocationLogo';
import SvgCompanyLogo from '../components/CompanyLogo';
import SvgDollarSignSvgrepoCom from '../components/DollarLogo';
import aiJobs from '../../content/ai-jobs.json'
import dataJobs from '../../content/datajobs_jobs.json'
import machinehack from '../../content/machinehack_jobs.json'
import mlconf from '../../content/mlconf_jobs.json'

const IndexPage = () => {
  const [dataObject, setDataObject] = React.useState([])
  const [numberOfPages, setNumberOfPages] = React.useState(1)
  const allJobs = [...aiJobs, ...dataJobs, ...machinehack, ...mlconf]
  const [currentPageCount, setCurrentPageCount] = React.useState(1)

  const decrementPageByOne = () => {
    setCurrentPageCount(prevCurrentPageCount => prevCurrentPageCount - 1)
    setDataObject(allJobs.slice((currentPageCount - 2) * 25, ((currentPageCount - 2) * 25 + 25)))
  }

  const incrementPageByOne = () => {
    setCurrentPageCount(prevCurrentPageCount => prevCurrentPageCount + 1)
    setDataObject(allJobs.slice(currentPageCount * 25, currentPageCount * 25 + 25))
  }

  React.useEffect(() => {
    async function fetchData() {
      setDataObject(allJobs.slice(0, 25))
      // we will use graphql to get the data
      // return (response.json())

      setNumberOfPages(Math.ceil(allJobs.length / 25))
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <main>
      <NavBar />

      <Wrap justify='center' bgColor={'gray.100'}>
        <VStack >
          <EmailCard />
          {dataObject?.map((job) => {
            // setNumberOfPages(Math.ceil(dataObject.length / 25))
            // console.log(job)
            return (
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
                        {job.type !== 'Not mentioned' ? (<Tag fontWeight={'extrabold'}>{job.type}</Tag>) : null}
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
            )
          })}
          <Stack p='5' justify={'center'} direction={'row'}>
            {currentPageCount > 1 ? <Button colorScheme={'blue'} onClick={decrementPageByOne}>← Previous Page</Button> : null}
            <Box boxShadow={'outline'} bgColor='white'>{currentPageCount}</Box>
            {currentPageCount < numberOfPages ? <Button colorScheme={'blue'} onClick={incrementPageByOne}>Next Page →</Button> : null}
          </Stack>
        </VStack>

      </Wrap>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>AI jobs</title>

