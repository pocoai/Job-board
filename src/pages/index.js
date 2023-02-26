import * as React from 'react'
import NavBar from '../components/NavBar'
import EmailCard from '../components/EmailCard'
import { Wrap, VStack } from '@chakra-ui/react'
import JobCard from '../components/JobCard'

const mainStyle = {
  // display: 'grid',
}

const dataObject = [{
  "id": 40879,
  "title": "Data Analyst",
  "type": "Full Time",
  "location": "Remote",
  "salary_start": "80",
  "salary_end": "110",
  "apply_link": "https://ai-jobs.net/job/40879-data-analyst/",
  "description": "",
  "tags": [
    "A/B testing",
    "Data Analytics",
    "Data Studio",
    "Data warehouse",
    "Engineering"
  ]
},
{
  "id": 408,
  "title": "Data Analyst",
  "type": "Full Time",
  "location": "Remote",
  // "salary_start": "80",
  // "salary_end": "110",
  "apply_link": "https://ai-jobs.net/job/40879-data-analyst/",
  "description": "",
  "tags": [
    "A/B testing",
    "Data Analytics",
    "Data Studio",
    "Data warehouse",
    "Engineering"
  ]
}]

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <NavBar />
      <Wrap justify='center' bgColor={'gray.100'}>
        <VStack >
          <EmailCard />
          {dataObject.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </VStack>
      </Wrap>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>AI jobs</title>