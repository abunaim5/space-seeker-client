import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import HowItWorks from "../HowItWorks/HowItWorks";
import PopularLocations from "../PopularLocations/PopularLocations";
import ShareSpace from "../ShareSpace/ShareSpace";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <HowItWorks />
            <Testimonial />
            <PopularLocations />
            <ShareSpace />
        </div>
    );
};

export default Home;