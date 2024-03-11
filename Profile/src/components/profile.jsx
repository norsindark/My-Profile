import React, { useState } from 'react';
import './profile.scss';
import html2pdf from 'html2pdf.js';

function Profile() {
    const [name, setName] = useState('Nguyên Tuấn');
    const [phoneNumber, setPhoneNumber] = useState('+84 376 985 ***');
    const [email, setEmail] = useState('norsindark@gmail.com');
    const [github, setGithub] = useState('https://github.com/norsindark');
    const [location, setLocation] = useState('BMT - Dak Lak');
    const [twitter, setTwitter] = useState('https://twitter.com/HaNguyenTuan2');
    const [facebook, setFacebook] = useState('https://www.facebook.com/norsindark');
    const [discord, setDiscord] = useState('https://discord.gg/KBan7Hs9');
    const [nameTag, setNameTag] = useState('SinD');
    const [isEditMode, setIsEditMode] = useState(false);

    const exportViewBoxAsPDF = () => {
        const element = document.getElementById('resume-wrapper');
        html2pdf()
            .from(element)
            .set({ width: 1500 })
            .save('profile.pdf');
    };

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    const printToPdf = () => {
        window.print();
    }

    const updateCVInfo = () => {
        setIsEditMode(false);
    }

    return (
        <div className="box" id="box">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <div className="resume-wrapper" id='resume-wrapper'>

                <section className="profile section-padding">
                    {isEditMode ? (
                        <div className="edit-mode">
                            <div className="container">
                                <div className="picture-resume-wrapper">
                                    <div className="picture-resume">
                                        <span>
                                            <img src="assets/imgs/avatar.png" alt="Avatar Image" />
                                        </span>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="name-wrapper">
                                    <h1> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></h1>
                                </div>
                                <div className="clearfix"></div>
                                <div className="contact-info clearfix">
                                    <ul className="list-titles">
                                        <li>Call</li>
                                        <li>Mail</li>
                                        <li>Github</li>
                                        <li>Home</li>
                                    </ul>
                                    <ul className="list-content">
                                        <li>
                                            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        </li>
                                        <li>
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </li>
                                        <li><a href={github}>
                                            <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
                                        </a></li>
                                        <li>
                                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact-presentation">
                                    <p><span className="bold">Hobby</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
                                </div>
                                <div className="contact-social clearfix">
                                    <ul className="list-titles">
                                        <li>Twitter</li>
                                        <li>FB</li>
                                        <li>Discord</li>
                                    </ul>
                                    <ul className="list-content">
                                        <li>
                                            <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                                        </li>
                                        <li>
                                            <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                                        </li>

                                        <li>
                                            <input type="text" value={discord} onChange={(e) => setDiscord(e.target.value)} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <input type="text" value={nameTag} onChange={(e) => setNameTag(e.target.value)} /> */}
                            <button onClick={updateCVInfo}>Save</button>
                        </div>
                    ) : (
                        <div className="container">
                            <div className="picture-resume-wrapper">
                                <div className="picture-resume">
                                    <span>
                                        <img src="assets/imgs/avatar.png" alt="Avatar Image" />
                                    </span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="name-wrapper">
                                <h1>{name}</h1>
                            </div>
                            <div className="clearfix"></div>
                            <div className="contact-info clearfix">
                                <ul className="list-titles">
                                    <li>Call</li>
                                    <li>Mail</li>
                                    <li>Github</li>
                                    <li>Home</li>
                                </ul>
                                <ul className="list-content">
                                    <li>{phoneNumber}</li>
                                    <li>{email}</li>
                                    <li><a href={github}>{nameTag}</a></li>
                                    <li>{location}</li>
                                </ul>
                            </div>
                            <div className="contact-presentation">
                                <p><span className="bold">Hobby</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
                            </div>
                            <div className="contact-social clearfix">
                                <ul className="list-titles">
                                    <li>Twitter</li>
                                    <li>FB</li>
                                    <li>Discord</li>
                                </ul>
                                <ul className="list-content">
                                    <li><a href={twitter}>{nameTag}</a></li>
                                    <li><a href={facebook}>{nameTag}</a></li>
                                    <li><a href={discord}>{nameTag}</a></li>
                                </ul>
                            </div>
                        </div>
                    )}
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
            <button onClick={exportViewBoxAsPDF}>Export Views as PDF</button>
            <button onClick={printToPdf}>Print PDF</button>
            <button onClick={toggleEditMode}>
                {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
            </button>
        </div>
    );
}

export default Profile;
