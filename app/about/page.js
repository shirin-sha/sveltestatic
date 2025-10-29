'use client'
import Link from "next/link"
import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"

export default function Home() {
    
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                {/*Start About One */}
                <section className="about-one about-one--about">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start About One Img */}
                            <div className="col-xl-5 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="about-one__img">
                                    <div className="inner">
                                        <img src="assets/img/about/about-v1-img1.jpg" alt=""/>
                                    </div>
                                 
                                </div>
                            </div>
                            {/*End About One Img */}

                            {/*Start About One Content */}
                            <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="about-one__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>ABOUT SVELTE</h5>
                                        </div>
                                        <h2>We Build Your Vision with Precision & Passion</h2>
                                    </div>

                                    <div className="text-box">
                                        <p>Svelte Contracting LLC is an Abu Dhabi–based interior fit-out contractor
                                            delivering elegant, functional spaces. From concept and approvals to
                                            procurement, joinery, MEP and final styling, we manage every detail.
                                            Expect clear communication, rigorous QA/QC and an on-time handover—
                                            every time.</p>
                                    </div>

                                    <div className="about-one__content-progress">
                                        <div className="about-one__content-progress-single">
                                            <div className="title">
                                                <h4>Design & Planning</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner1 count-bar" data-percent="90%">
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-one__content-progress-single mb0">
                                            <div className="title">
                                                <h4>On-Time Handover</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner2 count-bar" data-percent="95%">
                                                    <div className="count-text style2">95%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-bottom">
                                        <div className="about-one__content-bottom-author-box">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/projects">
                                                    <span className="txt">DISCOVER MORE</span>
                                                </Link>
                                            </div>

                                            <div className="author-info">
                                              
                                                <div className="signature-box">
                                                    <p style={{fontSize: '18px', lineHeight: '26px', fontWeight: '700',color:'#11161f'}}>Have a project in mind?<br/> Call us:<Link href="tel:+971XXXXXXXXX">+971 XX XXX XXXX</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                            {/*End About One Content */}
                        </div>
                    </div>
                </section>
                {/*End About One */}

                {/*Start Testimonials Two */}
                <section className="testimonials-two">
                    <div className="testimonials-two__pattern"
                        style={{backgroundImage: 'url(assets/img/pattern/testimonials-v2-pattern.png)'}}></div>
                    <div className="shape1 float-bob-x"><img src="assets/img/shape/testimonials-v2-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>WHY SVELTE</h5>
                            </div>
                            <h2>What Sets Us Apart</h2>
                            <p>We deliver elegant, functional interiors with clear timelines,
                                transparent costs and meticulous execution across Abu Dhabi.</p>
                        </div>

                        <TestimonialSlider4/>
                        {/*If we need navigation buttons */}
                        
                    </div>
                </section>
                {/*End Testimonials Two */}


                {/*Start Brand Two */}
                <div className="brand-one brand-one--two about">
                    <div className="container">
                        <BrandSlider2/>
                    </div>
                </div>
                {/*End Brand Two */}

                {/*Start Why Choose Us One */}
                <div className="why-choose-us-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Why Choose Us One Img */}
                            <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__img">
                                    <div className="shape1"><img src="assets/img/shape/why-choose-us-v1-shape1.png" alt=""/></div>
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img1.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img2.jpg" alt=""/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Why Choose Us One Img */}

                            {/*Start Why Choose Us Content */}
                            <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="fas fa-compass-drafting"></i>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Interior Design & Space Planning</h2>
                                                    <p>Floor plans, zoning and 3D visuals aligned to your brand and daily
                                                        operations.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="fas fa-couch"></i>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Human-Centred, Livable Interiors</h2>
                                                    <p>Materials, lighting and acoustics curated for comfort, durability and
                                                        style.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="fas fa-clipboard-check"></i>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Professional Planning & Approvals</h2>
                                                    <p>BOQs, programs, authority drawings and HSE compliance for a
                                                        smooth build.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Why Choose Us Content */}
                        </div>
                    </div>
                </div>
                {/*End Why Choose Us One */}


                {/*Start Call To Action One */}
                <section className="call-to-action-one">
                    <div className="call-to-action-one__bg"
                        style={{backgroundImage: 'url(assets/img/background/call-to-action-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="call-to-action-one__inner">
                            <div className="call-to-action-one__content text-center">
                                <h2>Have a Project in Your Mind</h2>
                                <h3>Don’t Hesitate to Say Hello </h3>
                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">LET’S TALK WITH US</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Call To Action One */}
     {/*Start Service One */}
     <section className="service-one">
                    <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
                    </div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR PROMISE</h5>
                            </div>
                            <h2>What You Can Expect from Svelte</h2>
                        </div>
                        <div className="row">
                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">01</div>
                                        <div className="icon-box">
                                            <i className="fas fa-clipboard-list"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Clarity from Day One</h2>
                                            <p>We define scope precisely, align realistic budgets, and prepare
                                                approval-ready drawings and schedules, so decisions are clear before
                                                work begins.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">02</div>
                                        <div className="icon-box">
                                            <i className="fas fa-screwdriver-wrench"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Craftsmanship You Can See</h2>
                                            <p>Master craftspeople deliver custom joinery and fine finishes,
                                                supported by strict QA/QC checklists, mock-ups, and supervision for a
                                                flawless result.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">03</div>
                                        <div className="icon-box">
                                            <i className="fas fa-calendar-check"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Delivery Without Drama</h2>
                                            <p>We build to detailed programs, communicate progress weekly,
                                                resolve issues proactively, and hand over on time with complete
                                                documentation and snag-free finishes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">04</div>
                                        <div className="icon-box">
                                            <i className="fas fa-leaf"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Safe & Sustainable</h2>
                                            <p>We uphold strict HSE standards and specify eco-conscious
                                                materials, reducing waste and lifecycle costs while creating durable,
                                                healthier interiors for people.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}
                        </div>
                    </div>
                </section>
                {/*End Service One */}
                     {/*Start Feauture Three */}
                     <section className="feauture-three">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/feauture-v3-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start Feauture Three Img */}
                            <div className="col-xl-5 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="feauture-three__img">
                                    <div className="inner clearfix">
                                        <img src="assets/img/resource/feauture-v3-img1.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Img */}

                            {/*Start Feauture Three Content */}
                            <div className="col-xl-7">
                                <div className="feauture-three__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>EXPLORE OUR APPROACH</h5>
                                        </div>
                                        <h2>We Design with Intent and Build with Precision</h2>
                                    </div>

                                    <div className="text-box">
                                        <p>From the first sketch to final styling, Svelte Contracting LLC
                                            coordinates design, approvals, MEP, joinery and finishes to deliver
                                            elegant, functional interiors—on schedule and with total transparency.
                                            Share your brief and we'll map the clearest path to handover.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="/projects">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Content */}
                        </div>
                    </div>
                </section>
                {/*End Feauture Three */}


                </div>


                
            </Layout>
        </>
    )
}


