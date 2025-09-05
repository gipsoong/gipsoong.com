export default function Landing() {
    return (
        <div className="landing-wrapper">
            <div className='intro'>
                <span>Hello!</span>
                <h1>Hi, I'm Ryan,</h1>
                <span></span>
                <p>Detail-obsessed, cat father and occasional tech nerd who's passionate about harmonizing design and technology to create intuitive, meaningful user experiences.</p>
            </div>

            <div className='experience'>
                <h2>Experience</h2>
                <div>

                    <div className='tech-stack'>
                        <div id='interface-design' className='tech-stack-cards grow'>
                            <h3>Interface Design</h3>
                            <p>Lorem ipsum</p>
                        </div>
                        <div id='project-management' className='tech-stack-cards grow'>
                            <h3>Project Management</h3>
                            <p>Lorem ipsum</p>
                        </div>
                        <div  id='front-end-development' className='tech-stack-cards grow'>
                            <h3>Front-end Development</h3>
                            <p>Lorem ipsum</p>
                        </div>

                    </div>

                    <ul>
                        <li>
                            <h4>Project Coordinator</h4>
                            <span>Digipixel</span>
                            <span>July 2025 - Present</span>
                        </li>
                        <li>
                            <h4>Web Tech</h4>
                            <span>Digipixel</span>
                            <span>January 2025 - July 2025</span>
                        </li>
                        <li>
                            <h4>Digital Media Executive</h4>
                            <span>Firstcom Solutions</span>
                            <span>September 2020 - February 2021</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='projects'>
                <h2>Projects</h2>

                <div className='projects-content'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}