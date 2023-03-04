import * as React from 'react'
import NavBar from '../components/NavBar'
import EmailCard from '../components/EmailCard'
import { Wrap, VStack, Stack, Flex, Text, Spacer, Circle, LinkBox, LinkOverlay, Box, Tag, Image, } from '@chakra-ui/react'
import LocationLogo from '../components/LocationLogo';
import SvgCompanyLogo from '../components/CompanyLogo';
import SvgDollarSignSvgrepoCom from '../components/DollarLogo';

const IndexPage = () => {
  const [dataObject, setDataObject] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      await fetch("https://nocodb.server.sakuto.in/nc/aijobs_or0b/api/v1/jobs", {
        method: "GET",
        headers: {
          "accept": "application/json",
          "xc-auth": process.env.XC_AUTH, // try by replacing with your own key
        }
      }).then((response) => response.json())
        .then((data) => {
          setDataObject(data)
          console.log(process.env)
          // we will use graphql to get the data
          // return (response.json())
        })
    }
    fetchData()
  }, [])
  return (
    <main>
      <NavBar />
      
      <Wrap justify='center' bgColor={'gray.100'}>
        <VStack >
          <EmailCard />
          {dataObject?.map((job) => {
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
                        {job.type !== 'Not mentioned'? (<Tag fontWeight={'extrabold'}>{job.type}</Tag>): null}
                    </Flex>
                    </LinkOverlay>

                    {/* Location with logo */}
                    <Stack direction={'row'} spacing={2}><LocationLogo /><Text>{job.location}</Text></Stack>

                    {/* Salary */}
                    {job.salary_end? (<Stack direction={'row'}><SvgDollarSignSvgrepoCom /><Text>{job.salary_start} - {job.salary_end}K</Text></Stack>): null }

                    {/* Tags */}
                    {job.tags? (<Stack direction={'row'} spacing={2}>{job.tags.map((tag, index) => (<Tag key={index} variant={'outline'}>{tag}</Tag>))}</Stack>) : null}

                </Box>
            </Stack>
        </LinkBox>
        )
          })}
        </VStack>
      </Wrap>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>AI jobs</title>