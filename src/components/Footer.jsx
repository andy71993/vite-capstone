import { Link } from "react-router-dom"
import Nav from "./Nav"
import chef from '../assets/chef.jpg'
import ma1 from '../assets/ma1.jpg'
import ma2 from '../assets/ma2.jpg'

Nav

const Footer = ({}) => {
    return(
        <footer>
            <section>
                <div className="container">
                    <div className="even-column">
                        <div>
                            <h1 className="fs-secondary-700 fw-secondary-medium text-clr-primary-900 ff-secondary">
                            Little Lemon
                            </h1>
                            <h2 className="fs-secondary-400 fw-secondary-regular text-clr-primary-900 ff-secondary">
                            Chicago
                            </h2>
                            <p className="text-clr-primary-900 fw-primary-regular">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <img src={ma1} alt="mario and adrian" />
                            <img src={ma2} alt="mario and adrian" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="color">
                <div className="container">
                    <div className="even-column">
                        <div className="even-column">
                            <div>
                                <img className="imgMax" src={chef} alt="Chef making a dish" />
                            </div>
                            <div>
                                <h3>Doormat Navigation</h3>
                                <Nav />
                            </div>
                        </div>
                        <div>
                            <h3>Contacts</h3>
                            <p>Email</p>
                            <p>Phone</p>
                            <p></p>
                        </div>
                        <div>
                            <h3>Social Media Links</h3>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>

            </section>
        </footer>
    )
}

export default Footer