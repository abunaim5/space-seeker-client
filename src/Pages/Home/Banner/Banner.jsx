import { Box, Flex, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import banner from '../../../assets/images/linards-lAGz00ZZnO0-unsplash.jpg'
import { Search2Icon } from "@chakra-ui/icons";

const Banner = () => {
    return (
        <Box bgImage={`${banner}`} h='100vh' bgRepeat='no-repeat' bgPos='center'>
            <Box h='full' className="bg-black/35">
                <Flex justify='center' align='center' h='full'>
                    <Box textColor='white' textAlign='center'>
                        <Heading fontSize='6xl'>Find Your Perfect Spot with SpaceSeeker</Heading>
                        <Text fontSize='3xl' my='1.5rem'>Effortless parking solutions at your fingertips</Text>
                        <Box w='65%' margin='auto' mt='2.5rem'>
                            <InputGroup>
                                <Input placeholder='Search location' name='search' focusBorderColor='#00CC66' size='lg' borderRadius='none' />
                                <InputRightElement h='full'>
                                    <Search2Icon />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Banner;