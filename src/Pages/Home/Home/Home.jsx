import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BlogPosts from "../BlogPosts/BlogPosts";
import NewsLetter from "../NewsLetter/NewsLetter";
import RelevantPicture from "../RelevantPicture/RelevantPicture";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner/>
            <RelevantPicture/>
            <BlogPosts/>
            <Reviews/>
            <AboutUs/>
            <NewsLetter/>
        </div>
    );
};

export default Home;