import './App.css';
import TopNav from './NavSec/TopNav';
import SideNav from './NavSec/SideNav';
import ProfileTabs from './Mypage/ProfileTabs';
import Footer from './Footer/Footer';
import Tabs from './Components/Tabs';
import Carousel from './Carousel'

function App() {
  return (
    <div>
      <TopNav />
      <SideNav />
      <Carousel/>
      <Tabs/>
      {/* <ProfileTabs /> */}
      <Footer />
    </div>
  );
}
export default App;
