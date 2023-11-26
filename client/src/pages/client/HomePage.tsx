import Banner from '../../components/Banner';
import Introduce from '../../components/Introduce';
import MenuToday from '../../components/MenuToday';
import { Review } from '../../components/Review';
import News from '../../components/News';
import Gallery from '../../components/Gallery';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Gallery />
            <Review />
            <News />
        </div>
    );

};
export default HomePage;
