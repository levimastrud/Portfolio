import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/projects" className="footer-return">Back to projects</Link>
        </footer>
    )
}

export default Footer;