import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const LocationsCard = ({ location }) => {
    const { name, image, description, features } = location;

    return (
        <Card borderRadius='none'>
            <CardBody>
                <Image
                    minH='252px'
                    src={image}
                    alt={`${name} location image`}
                    // borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textTransform='uppercase'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <List spacing={3}>
                        {
                            features.map((feature, idx) => <ListItem key={idx}>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                {feature}
                            </ListItem>)
                        }
                    </List>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant='solid' colorScheme='green' textTransform='uppercase' borderRadius='none'>
                    Find Parking
                </Button>
            </CardFooter>
        </Card>
    );
};

export default LocationsCard;