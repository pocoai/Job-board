import * as React from 'react';
import { Box, LinkBox, LinkOverlay, Stack, Flex, Spacer, Circle, Image, Text, Tag } from '@chakra-ui/react';
import LocationLogo from './LocationLogo';
import SvgCompanyLogo from './CompanyLogo';
import SvgDollarSignSvgrepoCom from './DollarLogo';

const JobCard = ({ job }) => {
    return (
        // Link
        <LinkBox variant='' href={job.apply_link}>

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
                        <Tag fontWeight={'extrabold'}>{job.type}</Tag>
                    </Flex>
                    </LinkOverlay>

                    {/* Location with logo */}
                    <Stack direction={'row'} spacing={2}><LocationLogo /><Text>{job.location}</Text></Stack>

                    {/* Salary */}
                    {job.salary_start && (<Stack direction={'row'}><SvgDollarSignSvgrepoCom /><Text>{job.salary_start} - {job.salary_end}K</Text></Stack>)}

                    {/* Tags */}
                    <Stack direction={'row'} spacing={2}>{job.tags.map((tag, index) => (<Tag key={index} variant={'outline'}>{tag}</Tag>))}</Stack>

                </Box>
            </Stack>
        </LinkBox>
    )
}

export default JobCard