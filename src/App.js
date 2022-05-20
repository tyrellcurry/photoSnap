import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage'
import StoriesPage from './pages/StoriesPage/StoriesPage'
import PricingPage from './pages/PricingPage/PricingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      {/*These are the different views that will be rendered based on the URL Route */}
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/stories' element={<StoriesPage/>}/>
          <Route path='/features' element={<FeaturesPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          {/*If a route is passed in that is not recognized (for example "/blahblah").. the Not Found Page is displayed*/}
          <Route path="*" element={<NotFoundPage />} /> {/*  <---- Possible Option: We could redirect the user back to the home page */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
