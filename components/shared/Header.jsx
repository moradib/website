import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Header = () => {

  const router = useRouter()

    const [isActive, setIsActive] = useState(false);

    function scrollToSection(event, id) {
        event.preventDefault();

        let element = document.getElementById(id);
        let offset = 100;

        let bodyRect = document.body.getBoundingClientRect().top;
        let elementRect = element.getBoundingClientRect().top;
        let offsetPosition = elementRect - bodyRect - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          if (position > 80) {
            setIsActive(true)
          } else {
            setIsActive(false)
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <header className={`page-header w-full h-[100px] ${isActive ? "active px-16" : ""} flex justify-between items-center px-10 fixed`}>
                <img src="/images/gbs_logo.png" alt="gbs logo" className='w-[100px] cursor-pointer' onClick={() => router.push("/")}/>
                <nav className='flex-center gap-6 text-white text-[16px] font-extrabold'>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" href="#about-us" onClick={(e) => scrollToSection(e, "about-us")}>دربارۀ‌ ما</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000" href="#sayar-services" onClick={(e) => scrollToSection(e, "sayar-services")}>ویژگی‌ها</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" href="#sayar-system" onClick={(e) => scrollToSection(e, "sayar-system")}>سامانه</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000" href="#testimonial" onClick={(e) => scrollToSection(e, "testimonial")}>نظرات</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" href="#frequently-questions" onClick={(e) => scrollToSection(e, "frequently-questions")}>سوالات متداول</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="350" data-aos-duration="1000" href="#sayar-team" onClick={(e) => scrollToSection(e, "sayar-team")}>تیم</a>
                    <a className='text-white' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" href="#contact-us-section">تماس با ما</a>
                </nav>
                <div className="default-btn flex-center min-w-[100px]">ورود</div>
            </header>
        </>
    )
}

export default Header