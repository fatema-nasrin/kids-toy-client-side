import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BlogPosts from "../BlogPosts/BlogPosts";
import NewsLetter from "../NewsLetter/NewsLetter";
import RelevantPicture from "../RelevantPicture/RelevantPicture";
import Reviews from "../Reviews/Reviews";
import ShopCategoryCard from "../ShopCategory/ShopCategoryCard";


const Home = () => {
    return (
        <div>
            <Banner/>
            <RelevantPicture/>
            <ShopCategoryCard/>
            <Reviews/>
            <AboutUs/>
            <BlogPosts/>
            <NewsLetter/>
        </div>
    );
};

export default Home;