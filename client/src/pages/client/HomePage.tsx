import Banner from '../../components/Banner';
import Introduce from '../../components/Introduce';
import MenuToday from '../../components/MenuToday';
import Review from '../../components/review';
import News from '../../components/News';
import Gallery from '../../components/Gallery';
import Chains from '../../components/Chains';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Gallery />
            <Chains />
            <Review />
            <News />
        </div>
    );

};
export default HomePage;
