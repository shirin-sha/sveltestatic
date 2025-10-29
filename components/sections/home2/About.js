'use client'
import React from 'react';
import Link from "next/link"

export default function About() {
    return (
        <> 

    {/*Start About Two */}
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/*Start About Two Img */}
                    <div className="col-xl-6">
                        <div className="about-two__img">
                            <div className="about-two__img1 wow fadeInLeft" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="inner">
                                    <img src="assets/img/about/about-v2-img1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End About Two Img */}

                    {/*Start About Two Content */}
                    <div className="col-xl-6">
                        <div className="about-two__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h5>KNOW ABOUT SVELTE</h5>
                                </div>
                                <h2>We Take Care of 
                                <br/>
                                Everything for Your Goals</h2>
                            </div>

                            <div className="about-two__content-text">
                                <p>Svelte Contracting LLC delivers turnkey interior fit-outs across Abu
Dhabi. From concept and approvals to procurement, joinery, MEP and
handover, we manage every detail—so your space is elegant, functional
and finished on schedule.</p>
                            </div>

                            <div className="about-two__content-list">
                                <ul>
                                    <li>
                                        <p><span className="icon-verified"></span> Authority Approvals & Feasibility</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-verified"></span> Conceptual Design & Space Planning</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-verified"></span> Custom Design & Feature Finishes</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__content-bottom">
                              

                                <div className="btn-box">
                                    <Link className="thm-btn" href="/about">
                                        <span className="txt">Discover More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End About Two Content */}
                </div>
            </div>
        </section>
        {/*End About Two */}
        </>
    )
}
