import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>My Journey</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I'm currently a 1st year B.Tech CSE student on an exciting journey of learning and growth in the world of software development and technology. While I don't have professional work experience yet, I'm actively building my skills and knowledge through coursework, personal projects, and self-study.
                </p>
                <br />
                <p>
                    My focus right now is on:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Mastering core computer science fundamentals including data structures, algorithms, and programming languages.
                        </p>
                    </li>
                    <li>
                        <p>
                            Exploring different domains of software development including web development, mobile development, and backend systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Building practical projects to apply theoretical knowledge and create a strong portfolio for future opportunities.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developing soft skills including problem-solving, teamwork, and communication which are crucial for professional growth.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gaining internship and professional experience through industry partnerships and summer programs during my academic journey.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Future Plans</h3>
                <br />
                <p>
                    As I progress through my B.Tech program, I'm committed to:
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Securing internships at reputable technology companies to gain real-world experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Contributing to open-source projects and building a strong developer community presence.
                        </p>
                    </li>
                    <li>
                        <p>
                            Specializing in areas that interest me most, whether it's cybersecurity, full-stack development, cloud computing, or other emerging technologies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Building meaningful relationships with mentors and industry professionals who can guide my career path.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>My Philosophy</h3>
                <br />
                <p>
                    I believe that the best way to grow as a software developer is through continuous learning, hands-on practice, and collaboration with others. While I'm at the beginning of my professional journey, I'm excited about the opportunities ahead and committed to becoming a skilled, ethical, and impactful software developer who can contribute meaningfully to the tech industry.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
