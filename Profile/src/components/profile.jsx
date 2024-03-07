import React from 'react';
import './profile.scss';

function Profile() {
    return (
        <div className="box">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <div className="resume-wrapper">
                <section className="profile section-padding">
                    <div className="container">
                        <div className="picture-resume-wrapper">
                            <div className="picture-resume">
                                <span>
                                    <img src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169746/Originals/avatar-anime.jpg" alt="" />
                                </span>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="name-wrapper">
                            <h1>Nguyên <br />Tuấn</h1>
                        </div>
                        <div className="clearfix"></div>
                        <div className="contact-info clearfix">
                            <ul className="list-titles">
                                <li>Call</li>
                                <li>Mail</li>
                                <li>Github</li>
                                <li>Home</li>
                            </ul>
                            <ul className="list-content ">
                                <li>+84 376 985 395</li>
                                <li>norsindark@gmail.com</li>
                                <li><a href="https://github.com/norsindark">SinD</a></li>
                                <li>BMT - Dak Lak</li>
                            </ul>
                        </div>
                        <div className="contact-presentation">
                            <p><span className="bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
                        </div>
                        <div className="contact-social clearfix">
                            <ul className="list-titles">
                                <li>Twitter</li>
                                <li>FB</li>
                                <li>Discord</li>
                            </ul>
                            <ul className="list-content">
                                <li><a href="">@SinD</a></li>
                                <li><a href="">SinD</a></li>
                                <li><a href="">SinD</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="experience section-padding">
                    <div className="container">
                        <h3 className="experience-title">Work Experience</h3>

                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>
                                <div className="time">Nov 2021 - Jun 2022</div>
                            </div>

                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Back End Developer </div>
                                <div className="company-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
                                </div>
                            </div>

                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>
                                <div className="time">Jun 2022 - May 2023</div>
                            </div>

                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Back End Developer</div>
                                <div className="company-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
                                </div>
                            </div>

                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>
                                <div className="time">May 2023 - Present</div>
                            </div>

                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Back End Developer</div>
                                <div className="company-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Skills</h3>
                            <ul>
                                <li className="skill-percentage">Java</li>
                                <li className="skill-percentage">PHP</li>
                                <li className="skill-percentage">Javascript</li>
                                <li className="skill-percentage">SQL</li>
                                <li className="skill-percentage">HTML / HTML5 / CSS / CSS3 / SASS</li>
                                <li className="skill-percentage">Photoshop</li>
                                <li className="skill-percentage">English</li>
                            </ul>
                        </div>

                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Education</h3>
                            <ul>
                                <li>
                                    <strong>FPT Polytechnic</strong><br />
                                    Bachelor of Science in Computer Science<br />
                                    September 20XX - May 20XX
                                </li>
                                <li>
                                    <strong>Nguyen Hue high school</strong><br />
                                    High School Diploma<br />
                                    September 20XX - May 20XX
                                </li>
                                <li>
                                    <strong>Tran Phu secondary school</strong><br />
                                    Secondary School Diploma<br />
                                    January 20XX - April 20XX
                                </li>
                                <li>
                                    <strong>Nguyen Van Be primary school</strong><br />
                                    Primary School Diploma<br />
                                    January 20XX - April 20XX
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Profile;
