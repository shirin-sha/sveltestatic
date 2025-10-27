import Link from "next/link"
export default function WhyChooseUs() {
    
    return (
        <>            

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
                                            <i className="fas fa-ruler-combined"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Interior Design & Space Planning</h2>
                                            <p>Smart layouts, moodboards and 3D visuals that make every square
                                                metre work harder.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="inner">
                                        <div className="icon-box">
                                            <i className="fas fa-couch"></i>
                                        </div>
                                        <div className="content-box">
                                            <h2>Elegant, Livable Interiors</h2>
                                            <p>Materials, lighting and acoustics selected for comfort, durability
                                                and daily use.</p>
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
                                            <p>Program, budget, authority drawings and permits—managed start
                                                to finish in Abu Dhabi.</p>
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

        </>
    )
}


