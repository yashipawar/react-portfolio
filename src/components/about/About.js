import React, { useState } from 'react';
import './About.css'; 
import '../mobileScreen.css'

const YourComponent = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/user2.jpg" alt="User" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Aspiring B Tech Graduate with an interest in Python Full Stack. <br /> 
              Worked on multiple projects involving Web development with Python. <br />
              Familiar with languages such as Python, Java, SQL, JavaScript, REST API, Django, Cloud.
            </p>
            <div>
              <div className="tab-titles">
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'achievements' ? 'active-link' : ''}`} onClick={() => opentab('achievements')}>Achievements</p>
                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => opentab('education')}>Education</p>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>Core Technologies</span><br />Python, Java, JavaScript</li>
                <li><span>Web Technologies</span><br />HTML, CSS, Bootstrap</li>
                <li><span>Database</span><br />MySQL, PostgreSQL</li>
                <li><span>Frameworks</span><br />Django, Flask, FastAPI</li>
                <li><span>Cloud Technology</span><br />AWS</li>
                <li><span>GUI</span><br />Tkinter</li>
                <li><span>Frameworks</span><br />NumPy, Pandas, Matplotlib</li>
              </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'achievements' ? 'active-tab' : ''}`} id="achievements">
              <ul>
                <li><span>TCS NQT-IT Qualified (Java)</span><br />Score -75.71</li>
                <li><span>International mathematics Olympiad 2016-17</span><br />Zonal rank 4052 (School rank 24, City rank 36)</li>
                <li><span> Sof- ieo 2nd international English Olympiad</span><br />State 7341 (School rank, City rank 77)</li>
                <li><span>Maharashtra Olympiad movement 2014</span><br />District rank 16</li>
              </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>June 2023 - July 2023</span><br />Software Development Intern at JP Morgan & Chase <br /><br />
                    <i>Learned about the software design principles like agile methodology. Also, <br />
                    got to know about the Open Source Software System. Worked for some <br />
                    Open Source contribution under JP Morgan & Chase. The Internship was in<br /> 
                    virtual mode in associated with Forage</i>
                </li>
              </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2023</span><br /><b>B Tech (Civil)</b> <br />
                    SSVP’s BSD College of Engineering, Dhule<br />
                    Dr. Babasaheb Ambedkar Technical University, Lonere<br /> 
                    CGPA - 8.7
                    </li>
                <li><span>2019</span><br /><b>HSC</b><br />
                    Infinity junior college, Morane (Dhule)<br />
                    Maharashtra State Board<br />
                    Percentage - 72.46
                    </li>
                <li><span>2017</span><br /><b>SSC</b><br />
                    Jai-Hind Highschool, Dhule<br />
                    Maharashtra State Board<br />
                    Percentage - 93
                    </li>
              </ul>
              </div>
            </div>
            {/* <a href="#" className="btn">Hire Me</a> */}
          </div>
          <a href="#" className="btn">Hire Me</a>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
