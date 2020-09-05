import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            
            <div className="home__row">
              <Product
                    id="12324"
                    title="JLB Racing CHEETAH"
                    price={20.45}
                    rating={5}
                    image="https://img.gkbcdn.com/p/2016-10-18/jlb-racing-cheetah-11101-1-10-brushless-rc-car-1571985792666._w500_.jpg"
                />  
              <Product
                    id="12325"
                    title=" Sfmeble Mikser 50's Style SMF03"
                    price={24.6}
                    rating={5}
                    image="https://www.sfmeble.pl/product_picture/fit_in_1200x900/mikser-50-s-style-smf03-kremowy_3.jpg"
                />  
            </div>
            <div className="home__row">
                <Product
                    id="12326"
                    title="Samsung TU7000 75 Class HDR 4K UHD Smart LED TV"
                    price={2000}
                    rating={5}
                    image="https://static.bhphoto.com/images/images500x500/samsung_un75tu7000fxza_75_led_4k_uhd_1581953002_1546589.jpg"
                />  
                <Product
                    id="12327"
                    title="NU7470 Smart 4K UHD TV"
                    price={1044.5}
                    rating={3}
                    image="https://images.samsung.com/is/image/samsung/in-uhdtv-nu7400-ua55nu7470uxxl-185768498?$PD_GALLERY_L_JPG$"
                />  
                <Product
                    id="12328"
                    title="Apple iPhone 8 Plus"
                    price={1356.89}
                    rating={5}
                    image="https://image.ceneostatic.pl/data/products/85616025/i-apple-iphone-11-128gb-fioletowy.jpg"
                />  
            </div>  
            <div className="home__row">
              <Product
                    id="12329"
                    title="DJI Inspire 2"
                    price={2599}
                    rating={5}
                    image="https://manofmany.com/wp-content/uploads/2020/05/DJI-Inspire-2.jpg"
                />  
            </div>

        </div>
    );  
}

export default Home;
