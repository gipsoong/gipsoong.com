import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">

            <div>
                <ul>
                    <CustomLink to="../about">Home</CustomLink>
                    <CustomLink to="../contact">Resume</CustomLink>
                    <CustomLink to="../faq">Projects</CustomLink>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ig</li>
                    <li>github</li>
                    <li>linkedin</li>
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