import '../Projects/Projects.scss'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import zennThumbnail from '../assets/Zenn/zenn.svg'
import enigmaThumbnail from '../assets/EnigmaKitchen/enigma.svg'
import ticketGoThumbnail from '../assets/TicketGo/ticketGo.svg'

function Projects() {

    let project1 = {
        title: 'ZENN',
        image: zennThumbnail,
        description: `ZENN is a conceptual high-tech sleep-aid project designed to provide users with a unique sleep experience and deep insights into their sleep health. Developed using React and CSS, this project showcases my skills in front-end development and design.

        The primary goal of ZENN is to offer users a cutting-edge solution for improving their sleep quality. While not a real product, ZENN combines sleek and modern design elements inspired by the aesthetics of the iPhone, creating an immersive and visually appealing user experience.
        
        Through its intuitive interface, ZENN goes beyond traditional sleep aids by offering users a comprehensive understanding of their sleep patterns and health. Although the product is conceptual, it aims to provide users with valuable insights into optimizing their sleep routines and achieving restful nights.
        
        By leveraging React and CSS, ZENN delivers a seamless and interactive user interface, allowing users to explore various features and functionalities. The project demonstrates my proficiency in building responsive and engaging web applications.
        
        ZENN is a testament to my ability to merge technology and design to create a compelling user experience. Although it is not a real product, it serves as a showcase of my skills in front-end development and highlights my attention to detail in crafting visually appealing interfaces.`,
        href: '/zenn'
    }

    let project2 = {
        title: 'TicketGo',
        image: ticketGoThumbnail,
        description: `The purpose of TicketGo is to offer users a convenient platform for discovering and booking tickets to various events. With its intuitive interface, users can easily browse available seats, view event details, and secure their desired tickets. The project emphasizes a sleek and modern design, creating an engaging and visually appealing experience.

        Key features of TicketGo include the ability to view and book available seats for events. By leveraging React and CSS, the project delivers a responsive and interactive interface that enhances the user journey. Users can navigate through different event options, select their preferred seats, and complete their booking with ease.
        
        TicketGo stands out by providing a slick and intuitive event service that simplifies the ticket booking process. The bright and friendly design theme, featuring vibrant blue and orange elements, enhances the overall visual appeal and reinforces the user-friendly nature of the platform.
        
        TicketGo offers a showcase of my skills in front-end development and design, highlighting my ability to create engaging interfaces and seamless user experiences. With its emphasis on simplicity and functionality, TicketGo demonstrates my dedication to delivering exceptional user-centered design in the context of event ticketing.
        
        Please note that TicketGo is a fictional project created for my portfolio, emphasizing my design and development capabilities in the realm of ticketing and event services.`,
        href: '/ticketgo'
    }

    let project3 = {
        title: 'Forged in Isolation',
        image: 'https://images.unsplash.com/photo-1633907284646-7abf4a195875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        description: 'This visionary project is dedicated to transforming urban spaces into thriving green oases, promoting biodiversity, and enhancing the well-being of communities. Green Horizons combines landscape architecture, ecological principles, and community engagement to create sustainable and aesthetically pleasing environments. From rooftop gardens to urban forests, every space is thoughtfully designed to maximize greenery, reduce carbon footprint, and improve air quality. Through partnerships with local organizations and educational programs, Green Horizons empowers residents to actively participate in the preservation and cultivation of these green landscapes. Experience the beauty of sustainable living and embrace the green horizons that await in our cities.',
        href: '/forged-in-isolation'
    }

    let project4 = {
        title: 'Enigma Kitchen',
        image: enigmaThumbnail,
        description: `Enigma Kitchen is an imaginative online food service that caters to individuals seeking unique and intriguing culinary experiences. Developed using React and CSS, this project serves as a testament to my skills in front-end development and design.

        Enigma Kitchen sets itself apart by offering a curated selection of unusual and interesting foods, candies, and drinks. The platform provides users with an opportunity to explore a variety of fantastical products that go beyond the ordinary. With its intuitive interface, users can easily navigate through the available options, add items to their cart, and customize their selections with responsive product variants and options.
        
        Noteworthy features of Enigma Kitchen include its extensive product catalog, seamless shopping experience, and the ability to add items to the cart for convenient checkout. By offering fantastical and unique products, Enigma Kitchen aims to delight and surprise users, providing them with a memorable and enjoyable online food shopping adventure.
        
        Enigma Kitchen also incorporates an innovative aspect by utilizing an AI called MidJourney to create all the product photos. This AI-driven approach enhances the visual representation of the products, allowing users to have a realistic and immersive shopping experience.
        
        Drawing inspiration from the whimsical world of Willy Wonka, Enigma Kitchen incorporates a vibrant color scheme featuring shades of red, green, and gray. This design choice adds a touch of magic and playfulness to the overall user experience, creating an engaging and visually captivating atmosphere.
        
        Enigma Kitchen stands out as a project where meticulous attention was given to detail and functionality. With a focus on user experience and a visually appealing design, this project showcases my dedication and passion for creating immersive and engaging interfaces. Enigma Kitchen holds a special place in my portfolio as it represents the culmination of significant time and effort dedicated to its development.`,
        href: '/enigma-kitchen'
    }

    const [gridTemplateColumns, setGridTemplateColumns] = useState('100% 0%');
    const [activeTitle, setActiveTitle] = useState('');
    const [activeDescription, setActiveDescription] = useState('');
    const [activeHref, setActiveHref] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    const learnAboutProject = (project) => {
        setGridTemplateColumns('50% 50%');
        setActiveTitle(project.title)
        setActiveDescription(project.description)
        setActiveHref(project.href)
        setSelectedProject(project.title);

        if (project.title === activeTitle) {
            setGridTemplateColumns('100% 0%');
            setActiveTitle('');
            setActiveDescription('');
            setActiveHref('');
            setSelectedProject(null);
        }
    }

    return (
        <div>
            <h1 className='page-title-project'>Projects</h1>
            <div className='projects-and-description-wrapper' style={{ gridTemplateColumns }}>
                <div className='project-container'>

                    <img alt='project' onClick={() => learnAboutProject(project4)} className={`project-image ${selectedProject === project4.title ? 'selected' : ''}`} src={project4.image} />
                    <h3 className={`title-text mobile ${selectedProject === project4.title ? 'selected' : ''}`}>{activeTitle}</h3>
                    <p className={`description-text mobile ${selectedProject === project4.title ? 'selected' : ''}`}>{activeDescription}</p>
                    <Link className={`use-project-btn mobile ${selectedProject === project4.title ? 'selected' : ''}`} to={activeHref}>Check it Out</Link>

                    <img alt='project' onClick={() => learnAboutProject(project1)} className={`project-image ${selectedProject === project1.title ? 'selected' : ''}`} src={project1.image} />
                    <h3 className={`title-text mobile ${selectedProject === project1.title ? 'selected' : ''}`}>{activeTitle}</h3>
                    <p className={`description-text mobile ${selectedProject === project1.title ? 'selected' : ''}`}>{activeDescription}</p>
                    <Link className={`use-project-btn mobile ${selectedProject === project1.title ? 'selected' : ''}`} to={activeHref}>Check it Out</Link>

                    <img alt='project' onClick={() => learnAboutProject(project2)} className={`project-image ${selectedProject === project2.title ? 'selected' : ''}`} src={project2.image} />
                    <h3 className={`title-text mobile ${selectedProject === project2.title ? 'selected' : ''}`}>{activeTitle}</h3>
                    <p className={`description-text mobile ${selectedProject === project2.title ? 'selected' : ''}`}>{activeDescription}</p>
                    <Link className={`use-project-btn mobile ${selectedProject === project2.title ? 'selected' : ''}`} to={activeHref}>Check it Out</Link>

                    {/* <img alt='project' onClick={() => learnAboutProject(project3)} className={`project-image ${selectedProject === project3.title ? 'selected' : ''}`} src={project3.image} />
                    <h3 className={`title-text mobile ${selectedProject === project3.title ? 'selected' : ''}`}>{activeTitle}</h3>
                    <p className={`description-text mobile ${selectedProject === project3.title ? 'selected' : ''}`}>{activeDescription}</p>
                    <Link className={`use-project-btn mobile ${selectedProject === project3.title ? 'selected' : ''}`} to={activeHref}>Check it Out</Link> */}

                </div>
                <div className='description-container'>
                    <div className='project-description'>
                        <div className='title-and-btn-wrapper'>
                            <button className='close-description-btn' onClick={() => {
                                setGridTemplateColumns('100% 0%')
                                setSelectedProject(null);
                            }}>X</button>
                            <h3 className='title-text'>{activeTitle}</h3>
                        </div>
                        <p className='description-text'>{activeDescription}</p>
                        <div className='use-btn-container'>
                            <Link className={`use-project-btn ${selectedProject !== null ? 'visible' : ''}`} to={activeHref}>Check it Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
