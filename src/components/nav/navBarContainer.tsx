import { Flex } from "@chakra-ui/react"
import React from "react"

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            p={4}
            bg="#FFFFFF"
            boxShadow={"sm"}
            color={["gray.500"]}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer