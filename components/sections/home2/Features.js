import Link from "next/link"


export default function Features() {
    return (
        <>
           
           {/*Start Feauture One */}
            <section className="feauture-one">
                <div className="container">
                    <div className="row">
                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>Creative Design</p>
                                    <h2><a href="#">Tailored concepts that reflect your brand and lifestyle.</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="/about"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <i className="fas fa-drafting-compass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}

                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>Expert Fit-Out</p>
                                    <h2><a href="#">Quality craftsmanship with rigorous QA/QC at every stage.</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="service"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <i className="fas fa-tools"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}

                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>On-Time Delivery</p>
                                    <h2><a href="#">Clear schedules, proactive, zero surprises.</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="projects"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <i className="fas fa-calendar-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}
                    </div>
                </div>
            </section>
            {/*End Feauture One */}

        </>
    )
}
