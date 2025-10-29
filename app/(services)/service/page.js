'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Service Page">
                <div>
                {/*Start Service Two */}
                <section className="service-two">
                    <div className="container">
                        <div className="row">
                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-compass-drafting"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/design-build-fit-out">Design & Build Fit-Out Solutions</Link></h2>
                                        <p>Concept to completion for offices, retail, F&B and residential interiors.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/design-build-fit-out">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-diagram-project"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/project-management">General Contracting & Project Management</Link></h2>
                                        <p>Multi-trade coordination, schedules, QA/QC and HSE compliance.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/project-management">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-hammer"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/joinery-carpentry">Joinery & Custom Carpentry</Link></h2>
                                        <p>Bespoke wardrobes, counters, feature walls and wall cladding.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/joinery-carpentry">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/mep-lighting">MEP & Lighting Integration</Link></h2>
                                        <p>Electrical, plumbing, HVAC and architectural lighting executed seamlessly.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/mep-lighting">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.9s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-screwdriver-wrench"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/renovation-refurbishment">Renovation & Refurbishment</Link></h2>
                                        <p>Transform existing spaces with minimal downtime and maximum impact.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/renovation-refurbishment">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="1.1s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <i className="fas fa-couch"></i>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/services/ffe-styling">FF&E and Styling Services
                                        </Link></h2>
                                        <p>Furniture, fixtures, window treatments and final styling for a flawless finish
                                        and long lasting.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/services/ffe-styling">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}
                        </div>
                    </div>
                </section>
                {/*End Service Two */}

             
                </div>

            </Layout>
        </>
    )
}