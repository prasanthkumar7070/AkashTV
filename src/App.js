import './App.css';
import TopNav from './NavSec/TopNav';
import SideNav from './NavSec/SideNav';
import ProfileTabs from './Mypage/ProfileTabs';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
  <BrowserRouter>
  <TopNav />
  <Routes>
         <Route path='/' element={  <Home />} />
        <Route path='/profile' element={  <ProfileTabs />} />
      </Routes>
      <SideNav />
     
      {/**/}
      <Footer />
  </BrowserRouter>
    </div>
  );
}
export default App;
