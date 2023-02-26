import * as React from 'react'
import { Text, Button, Flex, Spacer } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <nav>
            <Flex p={'3vw'}>
                <Text fontSize={'2xl'} fontWeight='extrabold' >AI jobs</Text>
                <Spacer />
                <Button colorScheme='blue'>Post a Job for free</Button>
            </Flex>
        </nav>
    )
}

export default NavBar