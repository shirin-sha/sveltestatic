import Link from "next/link"


export default function News() {
    return (
        <> 

        {/*Start Blog One */}
        <section className="blog-one">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h5>OUR BLOG POST</h5>
                    </div>
                    <h2>Read Our Latest News</h2>
                </div>

                <div className="row">
                    {/*Start Blog One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="inner">
                                    <img src="assets/img/blog/blog-v1-img1.jpg" alt=""/>
                                    <div className="overlay-icon">
                                        <Link href="#"><span className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-one__single-content">
                                <ul className="meta-info">
                                    <li>
                                        <p><Link href="#">Insights</Link></p>
                                    </li>
                                    <li>
                                        <p>02 July, 2025</p>
                                    </li>
                                </ul>
                                <h2><Link href="/blog/fit-out-cost-abu-dhabi">How to Budget Your Interior Fit-Out in Abu Dhabi: 7 Cost Drivers
                                        That Matter</Link></h2>
                                <div className="btn-box">
                                    <Link href="/blog/fit-out-cost-abu-dhabi">READ MORE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Blog One Single */}

                    {/*Start Blog One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="inner">
                                    <img src="assets/img/blog/blog-v1-img2.jpg" alt=""/>
                                    <div className="overlay-icon">
                                        <Link href="#"><span className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-one__single-content">
                                <ul className="meta-info">
                                    <li>
                                        <p><Link href="#">Workplace</Link></p>
                                    </li>
                                    <li>
                                        <p>18 July, 2025</p>
                                    </li>
                                </ul>
                                <h2><Link href="/blog/office-design-productivity">Office Design That Boosts Productivity: Lighting, Acoustics and
                                        Layout Strategies</Link></h2>
                                <div className="btn-box">
                                    <Link href="/blog/office-design-productivity">READ MORE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Blog One Single */}

                    {/*Start Blog One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="inner">
                                    <img src="assets/img/blog/blog-v1-img3.jpg" alt=""/>
                                    <div className="overlay-icon">
                                        <Link href="#"><span className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-one__single-content">
                                <ul className="meta-info">
                                    <li>
                                        <p><Link href="#">Sustainability</Link></p>
                                    </li>
                                    <li>
                                        <p>28 July, 2025</p>
                                    </li>
                                </ul>
                                <h2><Link href="/blog/sustainable-interiors-uae">Sustainable Interiors in the UAE: Materials That Look Good and Last
                                        Longer</Link></h2>
                                <div className="btn-box">
                                    <Link href="/blog/sustainable-interiors-uae">READ MORE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Blog One Single */}
                </div>
            </div>
        </section>
        {/*End Blog One */}


        </>
    )
}
