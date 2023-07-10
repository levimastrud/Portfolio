import '../Projects/Projects.scss'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Projects() {

    let project1 = {
        title: 'ZENN',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        description: 'Introducing "EcoLife: Sustainable Urban Living," a visionary project revolutionizing cities with eco-conscious design, advanced technology, and community engagement. By integrating green infrastructure, renewable energy systems, and smart technology, EcoLife creates a harmonious coexistence between nature and urban life. It inspires residents through workshops and events, educating them about sustainable practices. Welcome to the future of vibrant, eco-friendly urban living.',
        href: '/zenn'
    }

    let project2 = {
        title: 'TicketGo',
        image: 'https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        description: 'Introducing "InnoTech Solutions: Empowering Innovation for a Better Tomorrow." This transformative project is dedicated to driving innovation and fostering technological advancements that address pressing global challenges. InnoTech Solutions brings together brilliant minds, cutting-edge research, and industry collaboration to unlock breakthrough solutions. By nurturing a vibrant ecosystem of inventors, entrepreneurs, and investors, it sparks creativity and accelerates the development of game-changing technologies. From sustainable energy solutions to healthcare innovations, InnoTech Solutions is at the forefront of shaping a brighter future. Join us as we empower innovation and pave the way for a better tomorrow.',
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
        image: 'https://images.unsplash.com/photo-1627637819794-fba32f82be16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        description: 'This ambitious endeavor aims to create a collaborative platform where diverse disciplines converge, fostering groundbreaking ideas and driving innovation to new heights. Project Nexus brings together experts, researchers, and entrepreneurs from various fields, enabling cross-pollination of knowledge and expertise. By encouraging interdisciplinary collaboration, the project sparks the creation of novel solutions to complex global challenges. Through workshops, conferences, and shared spaces, Project Nexus provides a fertile ground for innovation to thrive. Join us as we forge meaningful connections, empower ideas, and shape a future where collective intelligence leads to transformative advancements. Welcome to the nexus of innovation and limitless possibilities.',
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

                    <img alt='project' onClick={() => learnAboutProject(project3)} className={`project-image ${selectedProject === project3.title ? 'selected' : ''}`} src={project3.image} />
                    <h3 className={`title-text mobile ${selectedProject === project3.title ? 'selected' : ''}`}>{activeTitle}</h3>
                    <p className={`description-text mobile ${selectedProject === project3.title ? 'selected' : ''}`}>{activeDescription}</p>
                    <Link className={`use-project-btn mobile ${selectedProject === project3.title ? 'selected' : ''}`} to={activeHref}>Check it Out</Link>

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
