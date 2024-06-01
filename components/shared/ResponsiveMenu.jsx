import React from 'react'
import { MdClose } from "react-icons/md"

const ResponsiveMenu = ({ handleScroll, visible, handleClose }) => {

    return (
        <>
            <div className={`responsive-menu-container fixed ${visible ? "active" : ""} top-0 bottom-0 left-0 right-0 z-[9999]`}>
                <div className={`responsive-menu-inner flex-col justify-start pt-4 w-[80%] sm:w-[400px] h-full`}>
                    <MdClose className='absolute left-[10px] t-[10px] text-[30px] text-[#fff] cursor-pointer' onClick={handleClose} />
                    <img src="/images/gbs_logo.png" alt="gbs logo" className='w-[100px] mx-auto' />
                    <div className="flex flex-col gap-4 pt-10">
                        <div className="default-btn mx-auto flex-center w-[80%]">ورود</div>
                        <a className='text-[#fff] pr-10' href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>دربارۀ‌ ما</a>
                        <a className='text-[#fff] pr-10' href="#sayar-services" onClick={(e) => handleScroll(e, "sayar-services")}>ویژگی‌ها</a>
                        <a className='text-[#fff] pr-10' href="#sayar-system" onClick={(e) => handleScroll(e, "sayar-system")}>سامانه</a>
                        <a className='text-[#fff] pr-10' href="#testimonial" onClick={(e) => handleScroll(e, "testimonial")}>نظرات</a>
                        <a className='text-[#fff] pr-10' href="#frequently-questions" onClick={(e) => handleScroll(e, "frequently-questions")}>سوالات متداول</a>
                        <a className='text-[#fff] pr-10' href="#sayar-team" onClick={(e) => handleScroll(e, "sayar-team")}>تیم</a>
                        <a className='text-[#fff] pr-10' href="#contact-us-section">تماس با ما</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveMenu