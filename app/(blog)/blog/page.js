import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="OUR BLOG">
                <div>

                {/*Start Blog One */} 
                <section className="blog-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src="assets/img/blog/blog-v1-img1.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="/blog/fit-out-cost-abu-dhabi"><span className="icon-plus"></span></Link>
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
                                            <Link href="/blog/fit-out-cost-abu-dhabi">READ MORE <span className="icon-left-arrow"></span></Link>
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
                                                <Link href="/blog/office-design-productivity"><span className="icon-plus"></span></Link>
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
                                        <h2><Link href="/blog/office-design-productivity">Office Design That Boosts Productivity: Lighting, Acoustics and Layout
                                                Strategies</Link></h2>
                                        <div className="btn-box">
                                            <Link href="/blog/office-design-productivity">READ MORE <span className="icon-left-arrow"></span></Link>
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
                                                <Link href="/blog/sustainable-interiors-uae"><span className="icon-plus"></span></Link>
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
                                            <Link href="/blog/sustainable-interiors-uae">READ MORE <span className="icon-left-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Blog One Single */}

                            {/*Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src="assets/img/blog/blog-v1-img4.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="/blog/abu-dhabi-fitout-approvals-checklist"><span className="icon-plus"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-one__single-content">
                                        <ul className="meta-info">
                                            <li>
                                                <p><Link href="#">Process</Link></p>
                                            </li>
                                            <li>
                                                <p>12 August, 2025</p>
                                            </li>
                                        </ul>
                                        <h2><Link href="/blog/abu-dhabi-fitout-approvals-checklist">Authority Approvals in Abu Dhabi: Your Fit-Out Checklist for a Smooth
                                                Start</Link></h2>
                                        <div className="btn-box">
                                            <Link href="/blog/abu-dhabi-fitout-approvals-checklist">READ MORE <span className="icon-left-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single*/}

                            {/*Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src="assets/img/blog/blog-v1-img5.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="/blog/fb-fitout-design-tips-uae"><span className="icon-plus"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-one__single-content">
                                        <ul className="meta-info">
                                            <li>
                                                <p><Link href="#">Retail & F&B</Link></p>
                                            </li>
                                            <li>
                                                <p>24 August, 2025</p>
                                            </li>
                                        </ul>
                                        <h2><Link href="/blog/fb-fitout-design-tips-uae">Designing F&B Spaces That Sell: Layout, Lighting and Material
                                                Choices</Link></h2>
                                        <div className="btn-box">
                                            <Link href="/blog/fb-fitout-design-tips-uae">READ MORE <span className="icon-left-arrow"></span></Link>
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
                                            <img src="assets/img/blog/blog-v1-img6.jpg" alt=""/>
                                            <div className="overlay-icon">
                                                <Link href="/blog/villa-fitout-upgrades-uae"><span className="icon-plus"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-one__single-content">
                                        <ul className="meta-info">
                                            <li>
                                                <p><Link href="#">Residential</Link></p>
                                            </li>
                                            <li>
                                                <p>07 September, 2025</p>
                                            </li>
                                        </ul>
                                        <h2><Link href="/blog/villa-fitout-upgrades-uae">Villa Makeovers That Add Value: 6 High-Impact Fit-Out
                                                Upgrades</Link></h2>
                                        <div className="btn-box">
                                            <Link href="/blog/villa-fitout-upgrades-uae">READ MORE <span className="icon-left-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Blog One Single */}
                        </div>
                    </div>
                </section>
                {/*End Blog One */}

                </div>

            </Layout>
        </>
    )
}