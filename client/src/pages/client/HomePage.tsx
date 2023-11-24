import Banner from '../../components/Banner';
import Introduce from '../../components/Introduce';
import MenuToday from '../../components/MenuToday';
import { Review } from "../../components/review";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Introduce />
            <MenuToday />
            <Review />
        </div>
    );
}

export default HomePage;
