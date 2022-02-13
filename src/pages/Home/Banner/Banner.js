import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
    const data = [
        {
            image: "https://c1.wallpaperflare.com/preview/386/67/744/royal-enfield-bullet-bike-motorcycle.jpg"

        },
        {
            image: "https://wallpapercave.com/wp/wp3647894.jpg"
        },
        {
            image: "https://wallpapercave.com/wp/wp5879396.jpg"
        },
        {
            image: "https://wallpapercave.com/wp/wp5691344.jpg"
        }
    ];



    return (
        <div className=''>
            <div className='w-full' style={{ textAlign: "center" }}>

                <div style={{
                    padding: ""
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="100%"
                        height="700px"


                        slideNumber={false}

                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"


                        style={{
                            textAlign: "center",
                            maxWidth: "100%",
                            maxHeight: "600px",
                            margin: " auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;