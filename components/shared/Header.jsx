import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ResponsiveMenu from './ResponsiveMenu';
import { useWindowSize } from 'react-use';
import { FaBars } from 'react-icons/fa';

const Header = () => {

  const router = useRouter()

  const { width } = useWindowSize();

  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      setShowMenu(false)
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
      <div className={`page-header w-full md:h-[100px] h-[70px] ${isActive ? "active px-16" : ""} flex justify-between items-center px-4 fixed`}>
        <img src="/images/gbs_logo.png" alt="gbs logo" className='w-[60px] lg:w-[90px] cursor-pointer' onClick={() => router.push("/")} />
        {width > 992 ? (
          <>
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
          </>
        ) : (
          <>
            <FaBars className='lg:text-[35px] text-[25px] cursor-pointer' onClick={() => setShowMenu(true)} />
          </>
        )}
      </div>
      {
        (width < 992) ? <ResponsiveMenu handleScroll={scrollToSection} visible={showMenu} handleClose={() => setShowMenu(false)} /> : null
      }
    </>
  )
}

export default Header