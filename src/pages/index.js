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
  Button,
} from '@chakra-ui/react'
import LocationLogo from '../components/LocationLogo';
import SvgCompanyLogo from '../components/CompanyLogo';
import SvgDollarSignSvgrepoCom from '../components/DollarLogo';
import { Seo } from '../components/seo';
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
      console.log('fetched')
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

            return (
              <LinkBox variant='' key={job.id}>
                <h3>
                  {/* Stack of 2 elements: Image and Box */}
                  <Stack bg={'white'} direction={['column', 'row']} w={['xs', 'sm', 'lg', '3xl']} spacing={'-4'} borderRadius='md' shadow={'base'} >
                    {job.company_logo ? (<Image
                      borderRadius='full'
                      // boxSize='10'
                      verticalAlign={'middle'}
                      src={job.company_logo}
                      alt='Organisation Logo'
                    />) : (<Circle size={['12', '16']} m={['3', '5']} bg='gray.50' ><SvgCompanyLogo /></Circle>)}

                    {/* Details of the job */}
                    <Box w='inherit' p={['3', '4', '5']}>

                      {/* Title and type tag */}
                      <LinkOverlay href={`/jobs/${job.id}`}>
                        <Flex>
                          <Text fontSize={['lg', 'xl']}>{job.title}</Text>
                          <Spacer />
                          {job.type !== 'Not mentioned' ? (<Tag size={['sm', 'md']} fontWeight={'extrabold'}>{job?.type}</Tag>) : null}
                        </Flex>
                      </LinkOverlay>

                      {/* Location with logo */}
                      {job.location && <Stack direction={'row'} spacing={2}><LocationLogo /><Text fontSize={['md', 'lg']}>{job.location}</Text></Stack>}

                      {/* Salary */}
                      {job.salary_end ? (<Stack direction={'row'}><SvgDollarSignSvgrepoCom /><Text fontSize={['md', 'lg']}>{job.salary_start} - {job.salary_end}K</Text></Stack>) : null}

                      {/* Tags */}
                      {job.tags ? (job.tags.map((tag, index) => (<Tag key={index} size={['xs', 'sm', 'md', 'lg']} fontSize={['xs', 'sm', 'md']} p={['1', '2']} m={'1'} variant={'outline'}>{tag}</Tag>))) : null}

                    </Box>
                  </Stack>
                </h3>
              </LinkBox>

            )
          })}

          < Stack p='5' justify={'center'} direction={'row'}>
            {/* Previous button visible when user is on page higher than 1 */}
            {/* {currentPageCount > 1 ? <Button colorScheme={'blue'} onClick={decrementPageByOne}>← Previous Page</Button> : null} */}
            
            {/* Current page number */}
            {/* <Box boxShadow={'outline'} bgColor='white'>{currentPageCount}</Box> */}

            {/* All pages */}
            {Array.from({ length: numberOfPages }, (_, i) => (
              <Button key={i} boxShadow={'outline'} size={'xs'} onClick={() => {
                setCurrentPageCount(i)
                setDataObject(allJobs.slice(i * 25, i * 25 + 25))
              }} bgColor='white'>{i + 1}</Button>
            ))}

            {/* Next button which should get hidden if on last page */}
            {/* {currentPageCount < numberOfPages ? <Button colorScheme={'blue'} onClick={incrementPageByOne}>Next Page →</Button> : null} */}
          </Stack>

          <LinkBox>
            <LinkOverlay href='https://github.com/amit0617'>
              {/* <Text color='blue' pb='6' decoration={'underline'}>Made with ❤️ by AMIT</Text> */}
            </LinkOverlay>
          </LinkBox>
        </VStack>
      </Wrap>

    </main >
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)
