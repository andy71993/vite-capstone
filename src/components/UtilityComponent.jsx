
import { MdOutlineDirectionsBike } from "react-icons/md";

export const Card = ({title, price, description, imgAlt, imgSrc}) => {
    return(
        <div className="card">
            <header>
                <div>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
                <div className="title-price">
                    <h3 className="fw-primary-semi-bold fs-primary-600" >{title}</h3>
                    <p id="price">{price}</p>
                </div>
            </header>
            <main>
                <p>{description}</p>
            </main>
            <footer>
                <p id="delivery">Order for Delivery</p>
                <MdOutlineDirectionsBike color="hsl(161, 13%, 33%)" size={'2em'}/>
            </footer>
        </div>
    )
};

export const Testimony = ({rating, review, name, imgSrc, imgAlt}) => {
    return(
        <div className="testimony">
            <header>
                <img src={imgSrc} alt={imgAlt}/>
            </header>
            <main>
                <p>{rating}</p>
                <p>{review}</p>
            </main>
            <footer>
                <p>{name}</p>
            </footer>
        </div>
    )
};

export const AboutUs = ({}) => {
    return(
        <article className="about-us">
            <h1 className="fs-secondary-700 fw-secondary-medium text-clr-primary-500 ff-secondary">
                Little Lemon
            </h1>
            <h2 className="fs-secondary-400 fw-secondary-regular text-clr-primary-100 ff-secondary">
                Chicago
            </h2>
            <p className="fw-primary-regular">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </article>
    )

};

export const Button = ({className, text, ...props}) => {
    return(
        <button className={className}>
            {text}
        </button>
    )
};

export default AboutUs

