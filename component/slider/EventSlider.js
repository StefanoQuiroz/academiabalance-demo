import { eventData } from '@/data/Data';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const EventSlider = () => {
    // Removí los props que no necesitamos
    return (
        <Slider
            className='row event_slider'
            slidesToShow={3}
            infinite={true}
            dots={true}
            autoplay={true}
            arrows={false}
            responsive={[
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
        >
            {eventData.map((item) => (
                <div className='col-xl-4 wow fadeInUp' key={item.id}>
                    <div className='tf__single_event'>
                        <div className='tf__single_event_img'>
                            <img src={item.imgSrc} alt='event' className='img-fluid w-100' />
                            <Link className={`event_category ${item.color}`} href='/events'>
                                {item.category}
                            </Link>
                        </div>
                        <div className='tf__single_event_text'>
                            <ul>
                                <li>
                                    <i className='far fa-map-marker-alt'></i> {item.location}
                                </li>
                                <li>
                                    <i className='far fa-clock'></i> {item.time}
                                </li>
                            </ul>
                            <Link className='title' href={`/events/${item.slug}`}>
                                {item.title}
                            </Link>
                            <p>{item.desc}</p>
                            <div className='tf__single_event_footer'>
                                <span>{item.name}</span>
                                <span>
                                    {new Intl.NumberFormat('es-ES', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    }).format(item.price)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default EventSlider;
