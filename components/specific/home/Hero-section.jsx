import React from 'react'
import { FaPlay } from "react-icons/fa"

const HeroSection = () => {
    return (
        <>
            <div className="main-banner-area main-banner-area-three">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="banner-text mr-16">
                            <h1 className='font-extrabold cursor-default' data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">گونش بیلگی سایار</h1>
                            <div className="flex items-start flex-col gap-2 my-10">
                                <p className='m-0' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">ارائه انواع خدمات طراحی و توسعه وب سایت های اختصاصی با تکنولوژی های روز دنیا</p>
                                <p className='m-0' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">ایجاد سیستم های هوش مصنوعی برای انواع کسب و کارها</p>
                                <p className='m-0' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">ارائه خدمات سئو و تولید محتوا</p>
                            </div>
                            <div className="flex-center gap-2" data-aos="fade-down" data-aos-duration="1200"
                                data-aos-delay="400">
                                <a className="default-btn flex-center" href="https://jumpx-react.envytheme.com/about-1/" data-aos="flip-right" data-aos-delay="2000" data-aos-duration="1000">ادامه مطلب</a>
                                <div className="default-btn flex-center active" data-aos="flip-right" data-aos-delay="2500" data-aos-duration="1000">
                                    <FaPlay className='ml-2' /> ویدئوی معرفی
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="banner-main-img banner-one-main-img">
                            <img src="/images/homePage/main-img3.png" alt="Image" />
                        </div>
                        <div className="banner-img">
                            <img className="animate__animated animate__fadeInDown animate__fast" src="/images/homePage/shape1.png" alt="Image" />
                            <img className="animate__animated animate__fadeInDown animate__fast" src="/images/homePage/shape2.png" alt="Image" />
                        </div>
                    </div>
                </div>
                <div className="over-shape">
                    <img src="/images/homePage/animate1.png" alt="Image" />
                    <img src="/images/homePage/animate1.png" alt="Image" />
                    <img src="/images/homePage/animate2.png" alt="Image" />
                    <img src="/images/homePage/animate2.png" alt="Image" />
                    <img src="/images/homePage/animate3.png" alt="Image" />
                </div>
            </div>
        </>
    )
}

export default HeroSection