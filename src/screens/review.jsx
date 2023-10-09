import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import User from "../images/user.svg";

import "../styles/review.css";

function Review() {
    return (
        <React.Fragment>
            <div className="rvw-main-div">

                <div className="rvw-head">
                    <p>Happy Customers</p>
                    <hr className="rvw-hr" />
                </div>

                <div className="rvw-carousel-div">
                    <div className="container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper_container"
                        >
                            <SwiperSlide>
                                <div className="rvw-card">

                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget.lorem ipssum.</p>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <i class="fa-solid fa-arrow-left fa-2xl" style={{ "color": "#000000" }}></i>
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <i class="fa-solid fa-arrow-right fa-2xl" style={{ "color": "#000000" }}></i>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Review