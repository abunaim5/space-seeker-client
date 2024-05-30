import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Box pos='absolute' zIndex='10' textColor='white' p='4' w='full'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='lg' as={Link} to='/' >SpaceSeeker</Heading>
                </Box>
                <Spacer />
                <Box textTransform='uppercase'>
                    <Breadcrumb separator=''>
                        <BreadcrumbItem _hover={{ color: '#00CC66' }}>
                            <BreadcrumbLink as={NavLink} to='/' _activeLink={{ color: '#00CC66', fontWeight: 'semibold' }}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem _hover={{ color: '#00CC66' }}>
                            <BreadcrumbLink as={NavLink} to='/f' _activeLink={{ color: '#00CC66', fontWeight: 'semibold' }}>Features</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem _hover={{ color: '#00CC66' }}>
                            <BreadcrumbLink as={NavLink} to='/p' _activeLink={{ color: '#00CC66', fontWeight: 'semibold' }}>Pricing</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem _hover={{ color: '#00CC66' }}>
                            <BreadcrumbLink as={NavLink} to='/a' _activeLink={{ color: '#00CC66', fontWeight: 'semibold' }}>About Us</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem _hover={{ color: '#00CC66' }}>
                            <BreadcrumbLink as={NavLink} to='/c' _activeLink={{ color: '#00CC66', fontWeight: 'semibold' }}>Contact</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button textTransform='uppercase' color='white' variant='outline' _hover={{bg: 'transparent'}} borderRadius='none'>Log In</Button>
                    <Button textTransform='uppercase' colorScheme='primary' borderRadius='none'>Sign Up</Button>
                </ButtonGroup>
            </Flex>
        </Box>
    );
};

export default NavBar;