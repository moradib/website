import React from 'react';
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarked, FaMobile, FaPhone, FaWhatsapp } from 'react-icons/fa';

function Footer({ className }) {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='scale-y-75 lg:translate-y-16 md:translate-y-12 translate-y-8'><path fill="#00095a" fill-opacity="1" d="M0,128L34.3,149.3C68.6,171,137,213,206,197.3C274.3,181,343,107,411,74.7C480,43,549,53,617,85.3C685.7,117,754,171,823,202.7C891.4,235,960,245,1029,213.3C1097.1,181,1166,107,1234,74.7C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <section className={`footer-area px-5 pt-20 ${className || ''}`}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2">
                    <div className="footer-about-widget">
                        <div className="logo">
                            <a href="#">
                                <strong>GBS</strong> <img src='/images/gbs_logo.png' alt="gbs logo" />
                            </a>
                        </div>
                        <p className='text-justify text-[#fff]'>
                            شرکت گونش بیلگی سایار پیشرو در صنعت فناوری اطلاعات، نرم افزار و هوش مصنوعی می باشد که فعالیت خود در زمینه سیستم های نرم افزاری از جمله نرم افزار مدیریت چاپخانه آغاز کرده است.
                        </p>
                        <div className="social mt-30">
                            <a href="mailto:info@guneshco.com" rel="noopener noreferrer" target="_blank">
                                <FaEnvelope />
                            </a>
                            <a href="https://www.instagram.com/guneshco.ir/" rel="noopener noreferrer" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="http://www.linkedin.com/in/gunesh-bilgisayar" rel="noopener noreferrer" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a href="https://wa.me/09144227402" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                    <div className="footer-navigation text-right gap-5">
                        <h4 className="title">لینک‌های مرتبط</h4>
                        <div className="flex flex-column align-items-start">
                            <div><a href="#about-us">دربارۀ‌ما</a></div>
                            <div><a href="#sayar-services">ویژگی‌ها</a></div>
                            <div><a href="#features">خدمات</a></div>
                            <div><a href="#testimonial">نظرات</a></div>
                            <div><a href="#frequently-questions">سوالات متداول</a></div>
                            <div><a href="#contact-us-section">تماس با ما</a></div>
                        </div>
                    </div>
                    <div className="footer-widget-info text-right">
                        <h4 className="title">پل‌های ارتباطی</h4>
                        <div className="flex flex-column align-items-start">
                            <div className='footer-widget-info-item my-2 flex justify-start items-center gap-1'>
                                <FaPhone className='footer-icon' /> 041-33303926
                            </div>
                            <div className='footer-widget-info-item my-2 flex justify-start items-center gap-1'>
                                <FaMapMarked className='footer-icon' /> تبریز، دانشگاه سراسری تبریز، ساختمان مرکزی فناوری، طبقه همکف، واحد B6
                            </div>
                            <div className='footer-widget-info-item my-2 flex justify-start items-center gap-1'>
                                <FaEnvelope className='footer-icon' /> guneshbilgisayar@gmail.com
                            </div>
                            <div className='footer-widget-info-item my-2 flex justify-start items-center gap-1'>
                                <FaMobile className='footer-icon' /> 09144227402
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-box flex-center py-10">
                    <p className='text-center'>تمامی حقوق نزد <a href="https://guneshco.com/">شرکت</a> محفوظ است</p>
                </div>
            </section>
        </>
    );
}

export default Footer;
