import { Link } from "react-router-dom"
import Home from '../Home.jsx'
import About from '../About.jsx'
import Menu from '../Menu.jsx'
import Resrevations from '../Reservations.jsx'
import Order from '../Order.jsx'
import Login from '../Login.jsx'

const Nav = ({className, navListClass}) => {
    return(
        <nav className={className}>
            <ul className={navListClass} role="list">
                <li>
                    <Link to={'/'} aria-label="Go to home page" className="">HOME</Link>
                </li>
                <li>
                    <Link to={'/about'} aria-label="Learn more about us">ABOUT</Link>
                </li>
                <li>
                    <Link to={'/menu'} aria-label="View our menu">MENU</Link>
                </li>
                <li>
                    <Link to={'/reservations'} aria-label="Make reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to={'/order'} aria-label="Order online">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to={'/login'} aria-label="Go to login page">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav