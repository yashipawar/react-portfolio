import React from 'react';
import './Services.css'; 
import '../mobileScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCropSimple, faCode, faFile, faMagnifyingGlassChart, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <FontAwesomeIcon icon={faCropSimple} />
            <h2>Full Stack Development</h2>
            <p>
              Bringing innovation to life through Python. I specialize in crafting efficient and scalable solutions,
              from web applications to automation scripts. With a keen eye for detail and a passion for clean code,
              I'm dedicated to delivering robust and elegant solutions that exceed expectations.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCode} />
            <h2>Backend Development</h2>
            <p>
              Empowering applications with a strong backend foundation. I specialize in architecting and implementing
              server-side logic, APIs, and databases. With proven experience in Python and backend technologies,
              I ensure seamless data flow, security, and high-performance for applications of all scales.
            </p>
          </div>
          <div>
          <FontAwesomeIcon icon={faFile} />
            <h2>Python Script Writer</h2>
            <p>
              Transforming concepts into functional Python scripts. I offer custom scripting solutions tailored to your
              needs, whether it's automating tasks, data processing, or building utilities. With a knack for efficiency
              and problem-solving, I deliver Python scripts that streamline processes and enhance productivity.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlassChart} />
            <h2>Business Intelligence</h2>
            <p>
              Turning data into actionable insights. As a business intelligence expert, I harness the power of Python to
              analyze, visualize, and interpret complex data sets. From data mining to dashboard creation, I help
              businesses make informed decisions and drive growth through data-driven strategies.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLaptop} />
            <h2>Complete SaaS Product Solution</h2>
            <p>
              From concept to launch, I specialize in crafting end-to-end SaaS products. Using Python and cutting-edge
              technologies, I develop intuitive user interfaces, scalable backends, and robust architecture. Let's
              collaborate to bring your SaaS vision to life, ensuring a seamless user experience and business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

