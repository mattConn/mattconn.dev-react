import React from 'react';

const Resume = () => (
    <article>
        <button type='button' className='btn btn-outline-primary'>Download</button>
        <h1 style={{ textAlign: 'center' }}>Matthew B. Connelly</h1>
        <div className="links">
            <p>Email: <a href="mailto:matthew.b.connelly@gmail.com">matthew.b.connelly@gmail.com</a>
            </p>
            <p>GitHub: <a href="https://github.com/mattconn/">github.com/MattConn</a>
            </p>
            <p>Homepage: <a href="https://mattconn.dev/">MattConn.dev</a>
            </p>
        </div>
        <h1 id="education" className="unnumbered">Education</h1>
        <ul>
            <li>
                <p>The City University of New York, College of Staten Island, Staten Island, NY</p>
                <p className="indent">Bachelor of Science in Computer Science</p>
                <p className="indent">Fall 2017 - Spring 2019</p>
                <p className="indent">Bachelor of Science in Communications: Concentration in Digital Design</p>
                <p className="indent">Graduated Spring 2016</p>
            </li>
        </ul>
        <h1 id="employment" className="unnumbered">Employment</h1>
        <ul>
            <li>
                <p>Web Developer</p>
                <p>The Charles NYC</p>
                <p>January 2016 - March 2017</p>
                <ul>
                    <li>
                        <p> Developed with JavaScript, HTML5, and CSS3 to create feature-rich, mobile-first websites</p>
                    </li>
                    <li>
                        <p> Implemented frameworks and libraries such as GreenSock, jQuery, and ScrollMagic</p>
                    </li>
                    <li>
                        <p> Used Gulp for task-automation, as well as pre-processors such as Jade and SASS</p>
                    </li>
                </ul>
            </li>
        </ul>
        <h1 id="projects" className="unnumbered">Projects</h1>
        <ul>
            <li>
                <p>Independent Study</p>
                <p>The City University of New York, College of Staten Island, Staten Island, NY</p>
                <p>August 2018 - December 2018</p>
                <ul>
                    <li>
                        <p> Studying formulas, concepts and proofs for differential and hyperbolic geometry</p>
                    </li>
                    <li>
                        <p> Solving mathematical problems in Pressley’s <em>Elementary Differential Geometry</em>
                        </p>
                    </li>
                    <li>
                        <p> Visualizing 3D surfaces and curves through Julia programming and other programs</p>
                    </li>
                </ul>
            </li>
        </ul>
        <h1 id="skills" className="unnumbered">Skills</h1>
        <ul>
            <li>
                <p> JavaScript, React, SASS, CSS3, HTML5, C/C++, Python, Julia</p>
            </li>
            <li>
                <p> Operating systems: MacOS, Ubuntu, Debian, Windows</p>
            </li>
        </ul>
    </article>
);

export default Resume;