import Banner from '../../components/Banner';
import Introduce from '../../components/Introduce';
import MenuToday from '../../components/MenuToday';
import { Review } from '../../components/Review';
import News from '../../components/News';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Review />
            <News />
        </div>
    );

};
export default HomePage;
