import React from 'react'
import { FaPlay } from "react-icons/fa"
import { useWindowSize } from 'react-use';

const HeroSection = () => {

    const { width } = useWindowSize();

    return (
        <>
            <div className="main-banner-area main-banner-area-three">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="banner-text mr-0 md:mr-16 flex items-center flex-col">
                            <h1 className='font-extrabold cursor-default' data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">گونش بیلگی سایار</h1>
                            <div className="flex items-center md:items-start flex-col gap-3 px-5 my-10">
                                {width > 992 ? <p className='m-0 md:text-[16px] text-[8px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">ارائه انواع خدمات طراحی و توسعه وب سایت های اختصاصی با تکنولوژی های روز دنیا</p> : null}
                                <p className='m-0 md:text-[16px] text-[8px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1300">ایجاد سیستم های هوش مصنوعی برای انواع کسب و کارها</p>
                                {width > 992 ? <p className='m-0 md:text-[16px] text-[8px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">ارائه خدمات سئو و تولید محتوا</p> : null}
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
                        <div className="banner-main-img flex-center">
                            <img src={width < 768 ? "/images/homePage/main-img2.png" : "/images/homePage/main-img1.png"} alt="Image" />
                        </div>
                    </div>
                </div>
                <div className="over-shape hidden md:block">
                    <img src="/images/homePage/animate1.png" alt="Image" />
                    <img src="/images/homePage/animate1.png" alt="Image"/>
                    <img src="/images/homePage/animate2.png" alt="Image"/>
                    <img src="/images/homePage/animate2.png" alt="Image" />
                    <img src="/images/homePage/animate3.png" alt="Image"/>
                </div>
            </div>
            <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-white w-full h-[100px]"></div>
        </>
    )
}

export default HeroSection