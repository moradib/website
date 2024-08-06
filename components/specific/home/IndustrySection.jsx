import React from 'react'
import { BsCameraReels, BsShop } from "react-icons/bs"
import { FaBitcoin, FaChalkboardTeacher } from 'react-icons/fa'
import { BsCashCoin, BsFillBuildingsFill } from "react-icons/bs"
import { MdOutlineSupportAgent } from "react-icons/md"
import { TbSeo } from "react-icons/tb"

const IndustrySection = () => {
    return (
        <>
            <section className="industries-serve-area pt-100 pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2 className='h2-title' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">زمینه‌های فعالیت</h2>
                        <p data-aos="fade" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="300">شرکت <strong>گونش بیلگی سایار</strong> با اتکا به تیمی مجرب، پروژه‌های موفقی را در زمینه‌های مختلف توسعه داده و منتشر کرده است.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-0">
                        <div className="flex flex-col gap-2 items-center lg:items-end">
                            <div className="single-industries flex items-center cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="100">
                                <BsCameraReels className='industry-icon' />
                                <h3 className='font-bold'>دوربین‌های هوشمند</h3>
                            </div>
                            <div className="single-industries flex items-center cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
                                <BsCashCoin className='industry-icon' />
                                <h3 className='font-bold'>حسابداری</h3>
                            </div>
                            <div className="single-industries flex items-center cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                                <FaBitcoin className='industry-icon' />
                                <h3 className='font-bold'>صرافی ارزهای دیجیتال</h3>
                            </div>
                            <div className="single-industries flex items-center aos-init cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="900">
                                <BsFillBuildingsFill  className='industry-icon' />
                                <h3 className='font-bold'>مدیریت مجتمع</h3>
                            </div>
                        </div>
                        <div className="">
                            <div className="industries-img flex-center" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
                                <img src="/images/homePage/offer1.png" alt="Image" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <div className="single-industries flex items-center right-item cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="500">
                                <BsShop className='industry-icon' />
                                <h3 className='font-bold'>فروشگاه آنلاین</h3>
                            </div>
                            <div className="single-industries flex items-center right-item cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="600">
                                <MdOutlineSupportAgent className='industry-icon' />
                                <h3 className='font-bold'>مشاوره</h3>
                            </div>
                            <div className="single-industries flex items-center right-item cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">
                                <TbSeo className='industry-icon' />
                                <h3 className='font-bold'>سئو و تولید محتوا</h3>
                            </div>
                            <div className="single-industries flex items-center right-item cursor-grab" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800">
                                <FaChalkboardTeacher className='industry-icon' />
                                <h3 className='font-bold'>دوره‌های آموزشی</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustrySection