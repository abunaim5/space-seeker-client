import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import LocationsCard from "../../../components/LocationsCard/LocationsCard";

const PopularLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('locations.json')
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])

    return (
        <Box maxW='7xl' mx='auto' my='20'>
            <SectionHeading heading='Popular Locations' />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                {
                    locations.map(location => <LocationsCard 
                        key={location.id}
                        location={location}
                    />)
                }
            </SimpleGrid>
        </Box>
    );
};

export default PopularLocations;