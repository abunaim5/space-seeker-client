import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const starRating = {
    itemShapes: Star,
    activeFillColor: '#f59e0b',
    inactiveFillColor: '#ffedd5'
};

const Testimonial = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    console.log(feedbacks);

    return (
        <Box maxW='7xl' mx='auto' my='20'>
            <SectionHeading heading="What Our Users Say" />
            <Box>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        feedbacks.map(feedback => <SwiperSlide key={feedback.id}>
                            <Box>
                                <Flex flexDir='column' minH='md' justifyContent='center' alignItems='center' gap='2' >
                                    <Avatar size='xl' name={feedback.name} src={feedback.photo_url} />
                                    <Text fontSize='3xl' mt='2' fontWeight='600'>{feedback.name}</Text>
                                    <Text mb='3' maxW='4xl' textAlign='center'>{feedback.feedback}</Text>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={feedback.rating}
                                        itemStyles={starRating}
                                        readOnly
                                    />
                                </Flex>
                            </Box>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Box>
        </Box>
    );
};

export default Testimonial;