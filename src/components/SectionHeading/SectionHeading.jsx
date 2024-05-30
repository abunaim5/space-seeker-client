import { Box, Heading } from "@chakra-ui/react";

const SectionHeading = ({heading}) => {
    return (
        <Box textAlign='center' mb='16'>
            <Heading textColor='#003366' textTransform='uppercase'>{heading}</Heading>
        </Box>
    );
};

export default SectionHeading;