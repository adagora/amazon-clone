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
                    title="The lean startup"
                    price={10.45}
                    rating={5}
                    image="https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg"
                />  
              <Product
                    id="12325"
                    title="The lean startup"
                    price={10.45}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />  
            </div>
            <div className="home__row">
                <Product
                    id="12326"
                    title="Suszarka"
                    price={10.45}
                    rating={5}
                    image="https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg"
                />  
                <Product
                    id="12327"
                    title="Sfmeble Mikser 50's Style SMF03"
                    price={10.45}
                    rating={5}
                    image="https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg"
                />  
                <Product
                    id="12328"
                    title="The lean startup"
                    price={10.45}
                    rating={5}
                    image="https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg"
                />  
            </div>  
            <div className="home__row">
              <Product
                    id="12329"
                    title="The lean startup"
                    price={10.45}
                    rating={5}
                    image="https://f01.esfr.pl/foto/3/3706493058/50f4ae137f5a219040582f0b3f31f7ad/philips-hp8230-00,3706493058_7.jpg"
                />  
            </div>

        </div>
    );  
}

export default Home;
