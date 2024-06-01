import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutSection = () => {
    return (
        <>
            <section className="about-area py-100 mt-100">
                <div className="grid grid-cols-2 align-items-center">
                    <div className="about-img flex-center" data-aos="fade-in" data-aos-duration="500" data-aos-delay="200">
                        <img src="/images/homePage/about-img.png" alt="Image" />
                    </div>
                    <div className="about-content" data-aos="fade-in" data-aos-duration="700" data-aos-delay="500">
                        <span>دربارۀ ما</span>
                        <h2 className='h2-title'>تکمیل انواع پروژه‌ها با بیشترین دقت و بالاترین کیفیت</h2>
                        <p className='my-3 text-justify w-[80%]'>در شرکت <strong>گونش بیلگی سایار سهند</strong> انواع پروژه‌ها با آخرین ابزارها و متدهای برنامه‌نویسی توسط تیم مجرب، توسعه داده می‌شوند!</p>
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex flex-col items-start gap-2">
                                    <div className='flex items-center gap-1 font-medium text-[#888]' data-aos='zoom-out' data-aos-duration='600' data-aos-delay="200"><IoMdCheckmarkCircleOutline className='text-green-500' />تیم متخصص و ماهر</div>
                                    <div className='flex items-center gap-1 font-medium text-[#888]' data-aos='zoom-out' data-aos-duration='600' data-aos-delay="400"><IoMdCheckmarkCircleOutline className='text-green-500' />کیفیت بالا و استانداردهای کدنویسی</div>
                                    <div className='flex items-center gap-1 font-medium text-[#888]' data-aos='zoom-out' data-aos-duration='600' data-aos-delay="600"><IoMdCheckmarkCircleOutline className='text-green-500' />پشتیبانی و خدمات پس از فروش عالی</div>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className="flex items-center gap-1 font-medium text-[#888]" data-aos='zoom-out' data-aos-duration='600' data-aos-delay="800"><IoMdCheckmarkCircleOutline className='text-green-500' />استفاده از تکنولوژی‌های پیشرفته</div>
                                    <div className="flex items-center gap-1 font-medium text-[#888]" data-aos='zoom-out' data-aos-duration='600' data-aos-delay="1000"><IoMdCheckmarkCircleOutline className='text-green-500' />نمونه‌کارهای قوی و رضایت مشتریان</div>
                                    <div className="flex items-center gap-1 font-medium text-[#888]" data-aos='zoom-out' data-aos-duration='600' data-aos-delay="1200"><IoMdCheckmarkCircleOutline className='text-green-500' />توانایی درک و تحلیل نیازهای مشتری</div>
                                </div>
                            </div>
                        </div>
                        <a className="default-btn flex-center w-[180px] mt-10" href="/about" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">موارد بیشتر</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection