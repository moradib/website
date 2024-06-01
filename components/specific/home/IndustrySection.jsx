import React from 'react'

const IndustrySection = () => {
    return (
        <>
            <section className="industries-serve-area pt-100 pb-0">
                <div className="container">
                    <div className="section-title">
                        <span>What We Offer</span>
                        <h2>Industries We Serve</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni fugit, quod iure quibusdam, omnis nisi cum, nostrum nulla deleniti mollitia tenetur.</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="">
                            <div className="col-lg-12 col-md-6">
                                <div className="single-industries aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="100">
                                    <i className="flaticon-machine-learning"></i>
                                    <h3>Heavy Industry</h3>
                                    <span>All kind of industry</span>

                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-industries aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
                                    <i className="flaticon-artificial-intelligence"></i>
                                    <h3>Transportation</h3>
                                    <span>All kind of industry</span>

                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-industries aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="300">
                                    <i className="flaticon-health"></i>
                                    <h3>Health Care</h3>
                                    <span>All kind of industry</span>

                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-industries aos-init" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="900">
                                    <i className="flaticon-automation"></i>
                                    <h3>Manufacturing</h3>
                                    <span>All kind of industry</span>

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="industries-img flex-center" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
                                <img src="/images/homePage/offer1.png" alt="Image" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="single-industries right-item aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="500">
                                <i className="flaticon-choice"></i>
                                <h3>Logistic</h3>
                                <span>All kind of industry</span>
                            </div>
                            <div className="single-industries right-item aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="600">
                                <i className="flaticon-deep-learning"></i>
                                <h3>Real Estate</h3>
                                <span>All kind of industry</span>
                            </div>
                            <div className="single-industries right-item aos-init aos-animate" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">
                                <i className="flaticon-cyber-security"></i>
                                <h3>Banking</h3>
                                <span>All kind of industry</span>
                            </div>
                            <div className="single-industries right-item aos-init" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800">
                                <i className="flaticon-blockchain"></i>
                                <h3>Automobile</h3>
                                <span>All kind of industry</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustrySection