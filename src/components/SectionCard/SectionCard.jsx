import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";

const SectionCard = ({icon, heading, description}) => {
    return (
        <Card borderRadius='none' _hover={{ transform: 'auto', translateY: '-10px' }}>
            <Box px={5} pt={5}>
                {icon}
            </Box>
            <CardHeader>
                <Heading size='md' textColor='#003366'>{heading}</Heading>
            </CardHeader>
            <CardBody pt={0}>
                <Text textColor='#333333'>{description}</Text>
            </CardBody>
            <CardFooter>
                <Button textTransform='uppercase' borderRadius='none'>Learn more</Button>
            </CardFooter>
        </Card>
    );
};

export default SectionCard;