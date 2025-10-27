'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                <div className="swiper-wrapper">

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Turnkey Design & Build</h3>
                                <p>One partner from concept to handover. Design, approvals,
                                    procurement, fit-out and styling—managed end-to-end.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-file-signature"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Approvals & Permitting</h3>
                                <p>We prepare drawings and coordinate with local authorities to
                                    secure approvals efficiently and keep your schedule on track.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Dedicated Project Management</h3>
                                <p>A single point of contact orchestrates trades, procurement and
                                    schedules, with weekly progress reports.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-screwdriver-wrench"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Quality Craftsmanship & QA/QC</h3>
                                <p>Skilled trades and custom joinery, mock-ups and rigorous checklists
                                    for a snag-free finish.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-file-invoice-dollar"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Transparent Costs & Reporting</h3>
                                <p>Detailed BOQs, milestone billing and variation control—no
                                    surprises, just clarity.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        {/*Start Why Choose Svelte Card */}
                        <div className="testimonials-two__single">
                            <div className="testimonials-two__single-top">
                                <div className="icon-box">
                                    <i className="fas fa-leaf"></i>
                                </div>
                            </div>

                            <div className="testimonials-two__single-text">
                                <h3>Sustainable & Responsible</h3>
                                <p>Eco-conscious materials, waste management and energy-smart
                                    lighting options that look great and last.</p>
                            </div>
                        </div>
                        {/*End Why Choose Svelte Card */}
                    </SwiperSlide>
                </div>
            </Swiper>

        </>
    )
}