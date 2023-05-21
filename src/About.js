import './App.css'

function About() {
    return (
        <div className="about-wrapper">
            <div className='image-wrapper'>
                <img className='self-portrait' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80" />
                <div className="about-social-link-wrapper">
                    <div className='social-link'></div>
                    <div className='social-link'></div>
                    <div className='social-link'></div>
                </div>
            </div>
            <div className="about-text-wrapper">
                <p>Welcome to my portfolio site! I am a passionate and dedicated web developer with a strong enthusiasm for creating engaging and dynamic web experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building modern and responsive websites that not only look visually appealing but also deliver seamless functionality.

                    Driven by a curiosity to learn and stay up-to-date with the latest web technologies, I am constantly expanding my skill set and exploring new tools and frameworks. I have hands-on experience with popular front-end frameworks like React and Vue.js, which enable me to develop interactive and intuitive user interfaces. Additionally, I am well-versed in back-end technologies such as Node.js and Express, allowing me to create robust and scalable web applications.

                    Throughout my journey as a web developer, I have acquired a keen eye for design and a knack for creating visually striking websites. I pay great attention to detail and strive for pixel-perfect precision in my work. I also understand the importance of user experience and incorporate user-centric design principles into every project I undertake.

                    Collaboration is at the heart of my work. I enjoy working in teams, leveraging effective communication and problem-solving skills to deliver projects on time and exceed client expectations. I am adaptable and thrive in dynamic environments that encourage innovation and growth.

                    As a lifelong learner, I am always seeking new challenges and opportunities to broaden my horizons. I am excited to collaborate on projects that push the boundaries of web development and contribute to making the web a more engaging and user-friendly space.

                    Thank you for visiting my portfolio site. Feel free to explore my projects and get in touch if you have any inquiries or potential collaboration opportunities. I look forward to connecting with you and bringing your web development ideas to life!</p>
            </div>
        </div>
    )
}

export default About;