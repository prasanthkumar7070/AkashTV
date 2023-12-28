import './App.css';
import TopNav from './NavSec/TopNav';
import SideNav from './NavSec/SideNav';
import ProfileTabs from './Mypage/ProfileTabs';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Register-section/Login';
import Signin from './Register-section/Signin';
import Main from './Register-section/Main';
import Otp from './Register-section/Otp';
import Createpin from './Register-section/Createpin';
import Success from './Register-section/Success';

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <ProfileTabs />
        <Routes>
          {/* <Route path='/' element={  <Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/create' element={<Createpin />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <SideNav />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
