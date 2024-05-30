import { CalendarIcon, Icon } from "@chakra-ui/icons";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { FaCar, FaSearch } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import SectionCard from "../../../components/SectionCard/SectionCard";

const HowItWorks = () => {
    const works = [
        {
            icon: <Icon as={FaSearch} textColor='#00CC66' fontSize='4xl' />,
            heading: 'Search for Parking',
            description: "Enter your destination and preferred time to see a list of available parking spots nearby. Our system provides real-time data, ensuring you have the most accurate information at your fingertips."
        },
        {
            icon: <CalendarIcon textColor='#00CC66' fontSize='4xl' />,
            heading: 'Reserve Your Spot',
            description: "Select your preferred parking spot from the search results and reserve it instantly. You can choose the date and time that works best for you, ensuring a hassle-free experience upon arrival."
        },
        {
            icon: <Icon as={FaCar} textColor='#00CC66' fontSize='4xl' />,
            heading: 'Park and Go',
            description: "Arrive at your reserved parking spot, park your vehicle, and go about your day with peace of mind. Our system ensures that your spot is waiting for you, making parking stress-free and efficient."
        },
    ]

    return (
        <Box maxW='7xl' mx='auto' my='20'>
            <SectionHeading heading="How It Works" />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                {
                    works.map((work, idx) => <SectionCard
                        key={idx}
                        icon={work.icon}
                        heading={work.heading}
                        description={work.description}
                    />)
                }
            </ SimpleGrid>
        </Box>
    );
};

export default HowItWorks;