import React from 'react';
import { useWindowSize } from 'react-use';
import teamList from "@/src/data/team-members.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaTelegram, FaUser, FaWhatsapp } from 'react-icons/fa';

function TeamSection() {

    const { width } = useWindowSize();

    return (
        <>
            <section className={`team-area pt-20 pb-100`}>
                <h2 className="h2-title mt-20">
                    با تیم <strong>گونش بیلگی سایار</strong> آشنا شوید!
                </h2>
                <>
                    <Swiper
                        effect={'cards'}
                        slidesPerView={width < 1200 ? Math.floor(width / 300) : 4}
                        spaceBetween={30}
                        freeMode={false}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true
                        }}
                        grabCursor={true}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className={`mySwiper`}
                    >
                        {
                            teamList.map((item, i) => (
                                <div key={i}>
                                    {teamMemberCard({ ...item })}
                                </div>
                            ))
                        }
                    </Swiper>
                </>

            </section>
        </>
    );
}

const teamMemberCard = (obj) => {
    return (
        <>
            <SwiperSlide className='swiper-card' id='sayar-team'>
                <div className="img-wrapper">
                    {!!obj.profile ?
                        <img src={obj.profile} alt={obj.name + " " + obj.family} />
                        :
                        <FaUser className='user-icon' />
                    }

                </div>
                <div className="social-box">
                    {
                        obj.social_media.map((item, i) => {
                            if (item.name === "telegram") {
                                return (
                                    <a key={i} target='_blank' rel='noreferrer' className='telegram' href={item.address_or_number}><FaTelegram /></a>
                                )
                            }
                            else if (item.name === "github") {
                                return (
                                    <a key={i} target='_blank' rel='noreferrer' className='github' href={item.address_or_number}><FaGithub /></a>
                                )
                            }
                            else if (item.name === "linkedin") {
                                return (
                                    <a key={i} className='telegram' target='_blank' rel='noreferrer' href={item.address_or_number}><FaLinkedin /></a>
                                )
                            }
                            else if (item.name === "whatsapp") {
                                return (
                                    <a key={i} target='_blank' rel='noreferrer' className='whatsapp' href={item.address_or_number}><FaWhatsapp /></a>
                                )
                            }
                            else if (item.name === "instagram") {
                                return (
                                    <a key={i} target='_blank' rel='noreferrer' className='instagram' href={item.address_or_number}><FaInstagram /></a>
                                )
                            }
                            else if (item.name === "email") {
                                return (
                                    <a key={i} target='_blank' rel='noreferrer' className='email' href={item.address_or_number}><FaEnvelope /></a>
                                )
                            }
                        })
                    }
                    {
                        !(obj.social_media.length) && <div style={{width: 1, height: 20}}></div>
                    }
                </div>
                <div className="member-info-box">
                    <h3>{obj.name} {obj.family}</h3>
                    <p>{obj.position}</p>
                </div>
                {!!obj.cv_address && <a className='cv-btn' target='_blank' rel="noreferrer" href={obj.cv_address} download={false}>رزومه</a>}
            </SwiperSlide >
        </>
    )
}

export default TeamSection;
