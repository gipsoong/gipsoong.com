import {Link, useMatch, useResolvedPath} from "react-router-dom"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { CiPaperplane } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";



export default function Navbar() {
    return (
        <nav className="nav">

            <div>

                <div id='profile-picture'></div>

                <ul className='links'>
                    <CustomLink to="../about"><IoIosHome />Home</CustomLink>
                    <CustomLink to="../contact"><CiPaperplane />Resume</CustomLink>
                    <CustomLink to="../faq"><FaGamepad />Projects</CustomLink>
                </ul>
            </div>

            <div>
                <ul className='socials'>
                    <li><a href='https://www.instagram.com/gipsoong/' target='_blank'><FaInstagram /></a></li>
                    <li><a href='https://github.com/gipsoong' target='_blank'><FaGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/gipsoong/' target='_blank'><FaLinkedin /></a></li>
                </ul>
            </div>

        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}