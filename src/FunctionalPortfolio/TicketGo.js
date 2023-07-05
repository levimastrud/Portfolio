import './TicketGo.scss';
import { useState } from 'react';
import ticketGoLogo from '../assets/TicketGo/ticketGoLogo.svg'
import bell from '../assets/TicketGo/bell.svg'
import Footer from '../Footer'
import facebook from '../assets/TicketGo/tg-fb-01.svg'
import instagram from '../assets/TicketGo/tg-instagram-01.svg'
import youtube from '../assets/TicketGo/tg-youtube-01.svg'
import tiktok from '../assets/TicketGo/tg-tik-tok-01.svg'
import downArrow from '../assets/Zenn/down-arrow-01.svg'
import downArrowGray from '../assets/TicketGo/down-arrow-gray-01.svg'


function TicketGo() {

    const events = [
        {
            date: 'Jan 3rd',
            time: '7:00 PM',
            location: 'Houston, TX - Badger Center',
        },
        {
            date: 'Jan 5th',
            time: '8:00 PM',
            location: 'Austin, TX - The Mohawk',
        },
        {
            date: 'Jan 7th',
            time: '7:30 PM',
            location: 'New Orleans, LA - Tipitina\'s',
        },
        {
            date: 'Jan 10th',
            time: '9:00 PM',
            location: 'Nashville, TN - The Basement East',
        },
        {
            date: 'Jan 12th',
            time: '7:00 PM',
            location: 'Atlanta, GA - Variety Playhouse',
        },
    ];



    const faqs = [
        {
            id: 0,
            question: 'Does TicketGo accept refunds?',
            answer: `Our cancellation and refund policies vary depending on the event and ticket type. Please refer to the specific event's terms and conditions or contact our customer support for assistance regarding cancellation and refund requests. We will do our best to accommodate your needs.`
        },
        {
            id: 1,
            question: 'How can I purchase tickets for an event?',
            answer: `To purchase tickets for an event, you can visit our website and browse through the available events. Once you find the event you're interested in, select the desired number of tickets and proceed to the checkout process. Follow the prompts to provide the necessary information and complete your ticket purchase.`
        },
        {
            id: 2,
            question: 'What payment methods are accepted for ticket purchases?',
            answer: 'We accept various payment methods, including major credit cards (Visa, Mastercard, American Express) and popular digital payment platforms (e.g., PayPal, Apple Pay, Google Pay). During the checkout process, you will have the option to select your preferred payment method.'
        },
        {
            id: 3,
            question: 'How do I receive my tickets after purchase?',
            answer: `After completing your ticket purchase, you will receive a confirmation email with your ticket details. Depending on the event organizer's preferences, you may receive digital tickets that can be downloaded and printed, or you may have the option to use mobile tickets directly on your smartphone via our event app.`
        },
        {
            id: 4,
            question: 'Are there any age restrictions for attending events?',
            answer: `Age restrictions vary depending on the event and its content. Some events may have specific age requirements or restrictions due to content suitability or legal regulations. Please check the event details or contact our customer support for information regarding age restrictions for a particular event.`
        },
        {
            id: 5,
            question: 'Can I transfer my ticket to someone else?',
            answer: 'In many cases, tickets can be transferred to another person. However, this policy may vary depending on the event organizer and ticket type. To transfer a ticket, please contact our customer support with the necessary details, and we will assist you in the ticket transfer process.'
        },
        {
            id: 6,
            question: 'What happens if an event is postponed or canceled?',
            answer: `In the event of a postponement or cancellation, we strive to provide prompt and accurate information to our customers. If an event is postponed, your tickets will generally remain valid for the rescheduled date. In the case of a cancellation, you may be eligible for a refund or have the option to exchange your tickets for another event, subject to the event organizer's policies. We will communicate any changes or updates regarding postponed or canceled events via email and our website.`
        }
    ]

    const [showAnswers, setShowAnswers] = useState({});

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleAnswer = (faqId) => {
        setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === faqId ? null : faqId));
    };

    return (
        <div className='ticketgo-bg'>
            <div className='ticketgo-wrapper'>
                <nav className='ticketgo-nav'>
                    <img src={ticketGoLogo} />
                    <span className='nav-links'>
                        <a href='#events'>Events</a>
                        <a href='#gallery'>Gallery</a>
                        <a href='#about'>About</a>
                        <a href='#faq'>FAQ</a>
                    </span>
                </nav>
                <div className='header-block'>
                    <img src='https://images.unsplash.com/photo-1549834125-80f9dda633c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                    <div className='stay-notified-wrapper'>
                        <img src={bell} />
                        <p className='notify-text'>Stay notified about Juniper Fields</p>
                    </div>
                    <div className='artist-title'>
                        <h6>Alternative / Indie</h6>
                        <h2>Juniper<br />Fields</h2>
                    </div>
                </div>
                <div id='events' className='events-block'>
                    <div className='block-title'>
                        <h3>Events</h3>
                        <p>17 Results</p>
                    </div>
                    <div className='events-wrapper'>
                        {events.map((event, index) => (
                            <div className='event' key={index}>
                                <div className='event-details'>
                                    <h5 className='event-date'>{event.date}</h5>
                                    <div className='date-and-venue'>
                                        <p>{event.time}</p>
                                        <h6>{event.location}</h6>
                                    </div>
                                </div>
                                <button>View Seats <img className='down-arrow' src={downArrow} /> </button>
                            </div>
                        ))}
                    </div>
                    <div className='view-all-events-wrapper'>
                        <button className='view-all-events'>View all Events</button>
                    </div>
                </div>
                <div id='gallery' className='gallery-block'>
                    <div className='block-title'>
                        <h3>Gallery</h3>
                        <p>Upload your own</p>
                    </div>
                    <div className='gallery-image-container'>
                        <img src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' />
                        <img src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                        <img src='https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                        <img src='https://images.unsplash.com/photo-1576967402682-19976eb930f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' />
                        <img src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                        <img src='https://images.unsplash.com/photo-1598214012909-9b1874af3cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80' />
                        <div className='gallery-view-all-btn'>
                            <p>View all <span className='mobile-hide'>68 photos of</span></p>
                            <h2><span className='mobile-hide'>Juniper Fields</span></h2>
                        </div>
                    </div>
                </div>
                <div id='about' className='about-block'>
                    <div className='block-title'>
                        <h3>About</h3>
                        <p>Juniper Fields</p>
                    </div>
                    <div className='tg-about-wrapper'>
                        <div className='tg-about-text'>
                            <p>Juniper Fields is an indie/alternative band founded by lead singer Alex Grenelly in 2009. Hailing from Fargo, North Dakota, their music blends heartfelt introspection
                                with a touch of Midwestern charm. With soulful vocals and captivating melodies, Juniper Fields takes listeners on a sonic journey through indie rock and alternative
                                folk. Their songs reflect the joys and struggles of life, resonating with raw emotion and vulnerability. Since their inception, Juniper Fields has become a local favorite
                                in Fargo's music scene and has gained recognition beyond their Midwest roots. With their captivating performances and a sound that effortlessly blends introspection and catchiness,
                                the band has left an indelible mark on audiences far and wide. Juniper Fields is not only a testament to the talent and creativity of its members but also a tribute to the vibrant
                                music culture that thrives in Fargo, North Dakota.</p>
                            <button className='read-more-about'>Read More <img className='down-arrow' src={downArrow} /> </button>
                        </div>
                        <div className='about-image'>
                            <img className='artist-headshot' src='https://images.unsplash.com/photo-1549834125-807b753f4e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=717&q=80' />
                            <div className='about-social-links'>
                                <img src={youtube} />
                                <img src={facebook} />
                                <img src={instagram} />
                                <img src={tiktok} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='faq-block'>
                    <div id='faq' className='block-title'>
                        <h3>FAQ</h3>
                    </div>
                    <div>
                        {faqs.map((faq) => (
                            <div className='faq' key={faq.id}>
                                <div className='faq-and-button' onClick={() => toggleAnswer(faq.id)}>
                                    <h6>{faq.question}</h6>
                                    <button>
                                        <img className={`faq-button ${openFAQ === faq.id ? 'open' : ''}`} src={downArrowGray} />
                                    </button>
                                </div>
                                <div className={`answer ${openFAQ === faq.id ? 'show' : ''}`}>
                                    <h6>{faq.answer}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='footer-block'>
                    <div className='footer-wrapper'>
                        <div className='footer-logo-wrapper'>
                            <img src={ticketGoLogo} />
                            <p>Let's connect</p>
                            <div className='about-social-links'>
                                <img src={youtube} />
                                <img src={facebook} />
                                <img src={instagram} />
                                <img src={tiktok} />
                            </div>
                        </div>
                        <ul>
                            <li>Helpful Links</li>
                            <li>Help</li>
                            <li>Sell</li>
                            <li>My Account</li>
                            <li>Contact Us</li>
                            <li>Gift Cards</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                            <li>Who We Are</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                            <li>Innovation</li>
                        </ul>
                        <ul>
                            <li>Partners</li>
                            <li>PayPal</li>
                            <li>Amazon</li>
                            <li>MasterCard</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TicketGo;