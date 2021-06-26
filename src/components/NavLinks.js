import './NavLinks.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const NavLinks = ({ types }) => {
    return (
        <div className='types'>
            {
                types.map(type => {
                    return <Link to={'/Types/' + type}><button>{type}</button></Link>
                })
            }
        </div>
    )
}

export default NavLinks;