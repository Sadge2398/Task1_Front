import './App.css'
import Product from './components/Content/Product'
import FeatureSection from './components/Feature-Section/FeatureSection'
import Navbar from './components/Header/Navbar'
import MobileNavBar from './components/MobileNav/MobileNavbar'

function App() {

  return (
    <>
     <Navbar />
     <Product />
     <FeatureSection/>
     <MobileNavBar/>
    </>
  )
}

export default App