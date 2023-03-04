import * as React from 'react'
import { Text, Button, Flex, Spacer, LinkOverlay, LinkBox } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <nav>
            <Flex p={'3vw'}>
                <Text fontSize={'2xl'} fontWeight='extrabold' >AI jobs</Text>
                <Spacer />
                <LinkBox><LinkOverlay href='/createJob'><Button colorScheme='blue'>Post a Job for free</Button></LinkOverlay></LinkBox>
            </Flex>
        </nav>
    )
}

export default NavBar