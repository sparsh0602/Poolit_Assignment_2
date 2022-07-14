import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/header/Header';
import ProductShowcase from './components/productShowcase/ProductShowcase';
import FeelSpecial from './components/feelSpecial/FeelSpecial';
import Experience from './components/experience/Experience';
import Security from './components/security/Security';
import BrandsLove from './components/brandsLove/BrandsLove';
import WindowPeak from './components/windowPeak/WindowPeak';
import MobileScroll from './components/mobileScroll/MobileScroll';
import CredStory from './components/cred-story/CredStory';
import AppRating from './components/appRating/AppRating';
function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <ProductShowcase/>
      <FeelSpecial/>
      <BrandsLove/>
      <Experience/>
      <MobileScroll/>
      <div className="non-mobile">
      <WindowPeak/>
      </div>
      <Security/>
      <CredStory/>
      <AppRating/>
    </div>
  );
}

export default App;
