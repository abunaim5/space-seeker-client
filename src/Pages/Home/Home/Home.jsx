import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import HowItWorks from "../HowItWorks/HowItWorks";
import PopularLocations from "../PopularLocations/PopularLocations";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <HowItWorks />
            <Testimonial />
            <PopularLocations />
        </div>
    );
};

export default Home;