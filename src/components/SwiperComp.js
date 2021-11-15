import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.scss';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import FlipCard from './FlipCard';
import Spinner from 'react-bootstrap/Spinner'



SwiperCore.use([Pagination, Navigation]);



function SwiperComp({ films, posters, title, loading }) {

    function findPoster(episode){
        let poster = posters.find(poster => poster.episode === episode )
        return poster.url
    }
    
    return (
        
        <div>
            <h1 className="title_row">{title}</h1>


            {loading ? 
                    (<div  style={{ height:"413px"}}>
                        <Spinner id="spinnerColor" animation="border" role="status" style={{ position: "absolute", left: "45%", bottom: "0", width: "8rem", height: "8rem"}}/>
                    </div> ):
                
                    (<Swiper slidesPerView={3} loop={true} className="mySwiper" navigation={true}>
                        {films.map((film, index) => (
                            <SwiperSlide key={index}>
                                <FlipCard film={film} poster={findPoster(film.episode_id )}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>)}
        </div>
        
    )
}     

export default SwiperComp
