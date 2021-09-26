import { Box, Image } from "@chakra-ui/react"
import React from "react"

const Logo = () => {
    return (
        <Box>
            <Image src="/logo_image_text.svg" alt="Vercel Logo" width={100} height={50} />
        </Box>
    )
}

export default Logo