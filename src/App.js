import './App.css';
import TopNav from './NavSec/TopNav';
import SideNav from './NavSec/SideNav';
import ProfileTabs from './Mypage/ProfileTabs';
import Footer from './Footer/Footer';
// import Tabs from './Components/Tabs';
// import Carousel from './Carousel'
// import Map from './Components/Map';

function App() {
  return (
    <div>
      <TopNav />
      <SideNav />
      {/* <Carousel/>
      <Tabs/>
      <Map/> */}
      <ProfileTabs />
      <Footer />
    </div>
  );
}
export default App;
