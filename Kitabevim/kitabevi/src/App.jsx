import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './Home'; 
import Category from './pages/Category'; 
import AboutUs from './pages/aboutUs'; 
import Login from './pages/Login';
import Shopping from './pages/Shopping';
import Favorites from './pages/Favorites';
import Header from './pages/Header';
import LoginUser from './pages/loginUser';
import Edebiyat from './pages/categoryPages/Edebiyat';
import Felsefe from './pages/categoryPages/Felsefe';
import Psikoloji from './pages/categoryPages/Psikoloji';
import Tarih from './pages/categoryPages/Tarih';
import Bilim from './pages/categoryPages/Bilim';
import Account from './pages/Account';
import Cart from './pages/Cart';



function App() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
      <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/category/" element={<Category />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={loggedInUser ? <Account /> : <Login />} />
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/favorites" element={<Favorites/>}  />
        <Route path="/loginUser"  element={<LoginUser/>}   />
        <Route path="/categoryPages/edebiyat" element={<Edebiyat/>}/>
        <Route path="/categoryPages/felsefe" element ={<Felsefe/>} />
        <Route path="/categoryPages/psikoloji"   element={<Psikoloji/>}  />
        <Route path="/categoryPages/tarih"   element={<Tarih/>}  />
        <Route path="/categoryPages/bilim" element={<Bilim/>} />
        <Route path="/account" element={loggedInUser ? <Account /> : <Login />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
