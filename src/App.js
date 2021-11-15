import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SwiperComp from './components/SwiperComp';
import images from './resources/images'
import Slider from './components/Slider';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';




function App() {

const [films, setFilms] = useState([])
const [isloading, setIsLoading] = useState(true)

useEffect(() => {
  async function getFilms(){
     await fetch('https://swapi.dev/api/films/?format=json')
    .then(response => response.json())
    .then(data => setFilms(data.results));
    setIsLoading(false)
  }
  
  getFilms()
  
}, [])

console.log(isloading)
  return (
    <>
      <NavbarComp logo= {images.Logo}/>
      <Slider images={images.Carousel} />
      <SwiperComp films={ films } posters={ images.Poster } title="Films" loading={isloading}/> 
      <Footer />
    </>
  )
}

export default App;
