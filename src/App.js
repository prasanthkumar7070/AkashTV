import './App.css';
import TopNav from './NavSec/TopNav';
import SideNav from './NavSec/SideNav';
import ProfileTabs from './Mypage/ProfileTabs';
import Footer from './Components/Footer';
import Carousel from './Carousel'

function App() {
  return (
    <div>
      <TopNav />
      <SideNav />
      {/* <Carousel/> */}
      <ProfileTabs />
      <Footer />
    </div>
  );
}
export default App;
