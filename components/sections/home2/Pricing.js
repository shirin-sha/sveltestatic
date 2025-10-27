import Link from "next/link"


export default function Cta() {
    return (
        <>            
            {/*Start Pricing One */}
            <section className="pricing-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>HOW WE WORK</h5>
                        </div>
                        <h2>A Seamless Path from Vision to Handover</h2>
                    </div>

                    <div className="row">
                        {/* Start  Pricing One Single*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-pattern"
                                    style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                <div className="table-header">
                                    <div className="table-header-top">
                                        <div className="icon-box">
                                            <i className="fas fa-lightbulb"></i>
                                        </div>
                                    </div>
                                    <h2>Discover<span></span></h2>
                                    <p>Collaborate on the vision.</p>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Site visit, measurements and brief</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Concept options and moodboards</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Space planning and scope outline</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Timeline and delivery milestones</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Next steps scheduled with our team</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="/book-site-visit">
                                            <span className="txt">Start Here</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing One Single */}

                        {/*Start  Pricing One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-pattern"
                                    style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                <div className="table-header">
                                    <div className="table-header-top">
                                        <div className="icon-box">
                                            <i className="fas fa-compass-drafting"></i>
                                        </div>
                                    </div>
                                    <h2>Design<span></span></h2>
                                    <p>Plan every detail.</p>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Detailed layouts and 3D visuals</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Materials and finishes selection</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>MEP and lighting coordination</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Authority drawings and approvals</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Finalized build-ready documentation</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="/services/design-build-fit-out#design">
                                            <span className="txt">Explore Design</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing One Single */}

                        {/*Start  Pricing One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-pattern"
                                    style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                <div className="table-header">
                                    <div className="table-header-top">
                                        <div className="icon-box">
                                            <i className="fas fa-hard-hat"></i>
                                        </div>
                                    </div>
                                    <h2>Deliver<span></span></h2>
                                    <p>Execute flawlessly.</p>
                                </div>

                                <div className="table-content">
                                    <ul>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Dedicated project manager on-site</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Skilled trades and custom joinery</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>QA/QC inspections and HSE compliance</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Weekly progress reports</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-check-mark"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Clean handover and post-care support</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="table-footer">
                                    <div className="btn-box">
                                        <a className="thm-btn" href="/process#build">
                                            <span className="txt">Build with Svelte</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing One Single */}
                    </div>
                </div>
            </section>
            {/* End Pricing One*/}

        </>
    )
}
