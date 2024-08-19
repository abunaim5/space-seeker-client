import { Box, Button, Heading, Text } from "@chakra-ui/react";
import background from "/world-map.svg"

const ShareSpace = () => {
    return (
        <Box my='20' bgImg={`url(${background})`} bgPos='top' bgAttachment='fixed' bgRepeat='no-repeat' bgSize='cover' minH='560px' display='flex' justifyContent='center' alignItems='center' >
            <Box textAlign='center' >
                <Heading textColor='white' textTransform='uppercase'>Share Your Parking Space</Heading>
                <Text textColor='white' mt={4} >Earn money by sharing your parking space with others. Choose a plan that suits your needs and start earning today!</Text>
                <Button colorScheme="green" mt={12} borderRadius='none' textTransform='uppercase'>Share Your Space</Button>
            </Box>
        </Box>
    );
};

export default ShareSpace;