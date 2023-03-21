import * as React from 'react'
import {
	Text,
	Heading,
	Button,
	Tag,
	Box,
	Wrap,
	Stack,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react'
import parse from 'html-react-parser';

import aijobs from '../../../content/ai-jobs.json'
import datajobs from '../../../content/datajobs_jobs.json'
import machinehack from '../../../content/machinehack_jobs.json'
import mlconf from '../../../content/mlconf_jobs.json'
import LocationLogo from '../../components/LocationLogo';
import SvgDollarSignSvgrepoCom from '../../components/DollarLogo';
import { Seo } from '../../components/seo';

const allJobs = [...aijobs, ...datajobs, ...machinehack, ...mlconf]

const JobPage = (props) => {
	const [job, setJob] = React.useState({})

	const id = props.params[`*`]
	// get job object from allJobs where job.id === id
	React.useEffect(() => {
		allJobs.map((job) => {
			if (job.id === id) {
				setJob(job)
			}
			return
		})
	}, [id])
	return (
		<Wrap justify='center' bgColor={'gray.100'}>
			<Box m='6' borderRadius={'3xl'} w={['xs', 'sm', 'md', 'lg', '3xl']} bgColor={'white'}>
				<Stack direction={'column'} spacing='2' p='4' bgColor='white' m='4'>
					<Heading as={'h1'} size='2xl'>{job?.title}</Heading>
					<Stack direction={'row'}><LocationLogo /><Text variant={'solid'}>{job?.location}</Text></Stack>
					<Stack direction={'row'}><SvgDollarSignSvgrepoCom /><Text variant={'solid'}>{job?.salary_start} - {job?.salary_end}K</Text></Stack>
					<Box>
						<Tag m={['1']} variant={'solid'}>{job?.type}</Tag>
						{job?.tags?.map((tag) => {
							return <Tag m={['1']} size={['sm', 'md', 'lg']} fontSize={['2xs', 'xs', 'sm', 'lg']} variant={'outline'}>{tag}</Tag>
						})}
					</Box>
					<LinkBox>
						<LinkOverlay href={job?.apply_link} isExternal>
							<Button w={['2xs', 'xs', 'sm']} colorScheme={'blue'}>Apply on the Job</Button>
						</LinkOverlay>
					</LinkBox>
				</Stack>
				<Stack direction={'column'} spacing='2' p={['2', '4']} bgColor='white' m='4'>
					<Text fontWeight={'bold'}>Description:</Text>
					<Box p={['4', '8']}>{job.description && parse(job.description)}</Box>
				</Stack>
			</Box>
		</Wrap>
	)

}

export default JobPage

export const Head = (props) => {
	<Seo title={props.params[`*`]}/>
}