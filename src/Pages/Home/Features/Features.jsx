import { TimeIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FaDollarSign, FaRegCalendarCheck } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SectionCard from "../../../components/SectionCard/SectionCard";

const Features = () => {
    const features = [
        {
            icon: <TimeIcon textColor='#00CC66' fontSize='5xl' />,
            heading: 'Real Time Availability',
            description: "Stay informed with up-to-the-minute information on available parking spaces. Our system continuously updates, providing you with the most accurate and current data to make your parking experience as seamless as possible."
        },
        {
            icon: <Icon as={FaRegCalendarCheck} textColor='#00CC66' fontSize='5xl' />,
            heading: 'Advanced Reservation System',
            description: "Plan ahead and secure your parking spot with our easy-to-use reservation system. Whether you&apos;re heading to work, an event, or a shopping trip, book in advance to ensure you have a spot waiting for you."
        },
        {
            icon: <Icon as={FaDollarSign} textColor='#00CC66' fontSize='5xl' />,
            heading: 'Dynamic Pricing',
            description: "Benefit from flexible pricing based on demand and availability. Our dynamic pricing model adjusts rates in real-time, offering competitive prices during off-peak hours and optimizing revenue for parking operators."
        },
    ]

    return (
        <Box w='75%' mx='auto' my='20'>
            <SectionHeading heading="Features" />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                {
                    features.map((feature, idx) => <SectionCard
                        key={idx}
                        icon={feature.icon}
                        heading={feature.heading}
                        description={feature.description}
                    />)
                }

                {/* <Card borderRadius='none' _hover={{transform: 'auto', translateY:'-10px'}}>
                    <Box px={5} pt={5}>
                        <TimeIcon textColor='#00CC66' fontSize='5xl' />
                    </Box>
                    <CardHeader>
                        <Heading size='md' textColor='#003366'>Real Time Availability</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <Text textColor='#333333'>Stay informed with up-to-the-minute information on available parking spaces. Our system continuously updates, providing you with the most accurate and current data to make your parking experience as seamless as possible.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button textTransform='uppercase' borderRadius='none'>Learn more</Button>
                    </CardFooter>
                </Card>
                <Card borderRadius='none' _hover={{transform: 'auto', translateY:'-10px'}}>
                    <Box px={5} pt={5}>
                        <Icon as={FaRegCalendarCheck} textColor='#00CC66' fontSize='5xl' />
                    </Box>
                    <CardHeader>
                        <Heading size='md' textColor='#003366'>Advanced Reservation System</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <Text textColor='#333333'>Plan ahead and secure your parking spot with our easy-to-use reservation system. Whether you&apos;re heading to work, an event, or a shopping trip, book in advance to ensure you have a spot waiting for you.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button textTransform='uppercase' borderRadius='none'>Learn more</Button>
                    </CardFooter>
                </Card>
                <Card borderRadius='none' _hover={{transform: 'auto', translateY:'-10px'}}>
                    <Box px={5} pt={5}>
                        <Icon as={FaDollarSign} textColor='#00CC66' fontSize='5xl' />
                    </Box>
                    <CardHeader>
                        <Heading size='md' textColor='#003366'>Dynamic Pricing</Heading>
                    </CardHeader>
                    <CardBody pt={0}>
                        <Text textColor='#333333'>Benefit from flexible pricing based on demand and availability. Our dynamic pricing model adjusts rates in real-time, offering competitive prices during off-peak hours and optimizing revenue for parking operators.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button textTransform='uppercase' borderRadius='none'>Learn more</Button>
                    </CardFooter>
                </Card> */}
            </SimpleGrid>
        </Box>
    );
};

export default Features;