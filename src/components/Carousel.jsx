import React from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from '../assets/photo11.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import logo from '../logo.jpg'



const images=[
    {
        photo: photo1,
        header: 'Lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        photo: photo2,
        header: 'Lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        photo: photo3,
        header: 'Lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
];

function PhotoCarousel() {
    return(
        <div>
            <Carousel>
                {
                    images.map((item, i)=>{
                        return <Carousel.Item key={i}>
                            <img
                              src={item.photo}
                              alt="img"
                              className='d-block w-100'
                            />
                            <Carousel.Caption>
                                <img src={logo} alt="logo" height='250'/>
                                <h3>{item.header}</h3>
                                <p>{item.body}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </div>
    )
}

export default PhotoCarousel;
