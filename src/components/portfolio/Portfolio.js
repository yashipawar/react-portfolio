import React from 'react';
import './Portfolio.css';
import '../mobileScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                <WorkItem
                        imgSrc="images/work4.png" 
                        title="Fitness Exercise App"
                        description="A modern React 18 fitness exercise app with the functionality to choose a fitness category and a specific muscle group. Browse exercises with practical examples on YouTube, pagination, exercise videos & more."
                        githubLink="https://jocular-moonbeam-92ba36.netlify.app/" 
                    />
                <WorkItem
                        imgSrc="images/work3.png"
                        title="SaaS AI Platform App"
                        description="An integrated SaaS solution developed using Next.js, React, and Tailwind CSS, supported by Prisma and Stripe. It seamlessly integrates Open AI's API to offer an array of AI services, including conversational AI, image recognition, audio processing, video analysis, and coding assistance"
                        githubLink="https://github.com/yashipawar/SaaS-AI"
                    />
                <WorkItem
                        imgSrc="images/work1.png"
                        title="Dashboard Django App (End to End)"
                        description="Created a Dashboard Based complete app using Python Django. The main vision of this project is to better visualize data with a dashboard. The app also uses PostgreSQL Database to make Django app a fully End to End Solution."
                        githubLink="https://github.com/yashipawar/Income-expense-website"
                    />
                    <WorkItem
                        imgSrc="images/work2.png"
                        title="RESTful API with Python"
                        description="Created REST API app using Django. Which works on the company data and give the relevant solution based on REST API"
                        githubLink="https://github.com/yashipawar/RestfulAPI"
                    />
                    
                    
                </div>
            </div>
        </div>
    );
};

const WorkItem = ({ imgSrc, title, description, githubLink }) => {
    return (
        <div className="work">
            <img src={imgSrc} alt={title} />
            <div className="layer">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={githubLink}>
                    <FontAwesomeIcon icon={faLink} /> {/* Use the Font Awesome icon */}
                </a>
            </div>
        </div>
    );
};

export default Portfolio;
