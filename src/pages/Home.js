// src/pages/Home.js
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

const Home = () => {
    return (
        <div>
            <div className="header">
                <img className="logo" src="/logo.png" alt="AKGEC Logo" />
                <div className="text-container">
                    <h4>!! Welcome to the Open Library !!</h4>
                    <h1>AKGEC Digital Library</h1>
                </div>    
                <div className="sign-in">
                    <img className="sign-in-pic" src="signpic.png" alt="Sign In Pic" />
                    <Link to="/sign-in" className="sign-in-link">Sign In</Link>
                </div>
            </div>
            <div className="search-bar-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search your book to read" />
                    <button>Search</button>
                </div>
            </div>
            <div className="features">
                <div className="feature">
                    <Link to="/FirstSemester">
                        <FeatureCard title="First Semester Books" />
                    </Link>
                    <p>Physics | Maths-1 | Funadamentals of Electrical Engg. | Programming for problem solving | Environment & Ecology</p>
                </div>
                <div className="feature">
                    <Link to="/SecondSemester">
                        <FeatureCard title="Second Semester Books" />
                    </Link>
                    <p>Chemistry | Maths-2 | Funadamentals of Electronics Engg. | Funadamentals of Mechanical Engg.</p>
                </div>
                <div className="feature">
                    <Link to="/ThirdSemester">
                        <FeatureCard title="Third Semester Books" />
                    </Link>
                    <p>Universal Human Value & Professional Ethics | Maths-4 | Data Structure | Computer Organization & Architecture | Discrete Structures and Theory of Logic | Python Programming</p>
                </div>
                <div className="feature">
                    <Link to="/FourthSemester">
                        <FeatureCard title="Fourth Semester Books" />
                    </Link>
                    <p>Digital Electronics | Technical Communication | Operating System | Theory of Automata and Formal Languages | Object Oriented Programming with Java | Cybersecurity</p>
                </div>
                <div className="feature">
                    <Link to="/FifthSemester">
                        <FeatureCard title="Fifth Semester Books" />
                    </Link>
                    <p>Database Management System | Web Designing and Development | Design and Analysis of Algorithm | Data Analytics | Machine Learning Techniques</p>
                </div>
                <div className="feature">
                    <Link to="/SixthSemester">
                        <FeatureCard title="Sixth Semester Books" />
                    </Link>
                    <p>Augmented & Virtual Reality | Web Technology | Computer Networks | Big Data | Embedded Systems</p>
                </div>
                <div className="feature">
                    <Link to="/SeventhSemester">
                        <FeatureCard title="Seventh Semester Books" />
                    </Link>
                    <p>Machine Learnng | Artificial Intelligence | Deep Learning | Renewable Energy Resources</p>
                </div>
                <div className="feature">
                    <Link to="/EighthSemester">
                        <FeatureCard title="Eighth Semester Books" />
                    </Link>
                    <p>Project Management & Entrepreneurship | Cloud Computing | Automation & Robotics</p>
                </div>
                <div className="feature">
                    <Link to="/MiscellaneousTexts">
                        <FeatureCard title="Miscellaneous Texts" />
                    </Link>
                    <p>"The Adventures of Sherlock Holmes" | "A Tale of Two Cities" | "Dracula" | "Frankenstein" | "Alice's Adventures in Wonderland" | "The Picture of Dorian Gray"</p>
                    <b>and many more...</b>
                </div>
            </div>
            <section id="about">
                <h2>About</h2>
                <p>Welcome to our platform! We are dedicated to provide high-quality resources and services in the field of education and technology. Our offerings include institutional registration, bulk registration, sponsorship opportunities, and more. For any inquiries or feedback, please don't hesitate to contact us. We hope you find our resources valuable and useful.</p>
                <p>Thank you for visiting!</p>
                <ul>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Legal Information</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
                <footer>
                    <p>&copy; Schrödinger developers &trade;</p>
                </footer>
            </section>
        </div>
    );
};

export default Home;