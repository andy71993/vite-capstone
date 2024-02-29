import AboutUs, { Button, Card, Testimony } from "./UtilityComponent";
import displayImg from '../assets/displayImg2.jpg';
import greekSalad from '../assets/greekSalad.jpg';
import brunchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemonDessert.jpg';
import examplePic from '../assets/examplePic.jpg';
import '../App.css'

 export const Hero = ({}) => {
    return(
        <section className="hero">
            <div className="container">
                <div className="even-column">
                    <div>
                        <AboutUs />
                        <Button text={'Reserve a Table'} className={'bg-clr-primary-500 fw-primary-semi-bold fs-primary-600 button'}/>
                    </div>
                    <div>
                        <img className="displayDish" src={displayImg} alt="display dish"/>
                    </div>
                </div>
            </div>
        </section>
    )
};


export const Highlight = ({}) => {
    return(
        <section>
            <div className="container">
                <div className="even-column">
                    <h2>This week specials</h2>
                    <Button text={'Online Menu'} className={'button bg-clr-primary-500 fw-primary-semi-bold fs-primary-600'}/>
                </div>
                <div className="even-column card-cont">
                    <Card
                        title={'Greek Salad'}
                        price={'$16.99'}
                        imgSrc={greekSalad}
                        imgAlt={'Greek salad'}
                        description={'Made with cucumbers, tomatoes, onions, bell peppers, and feta cheese...'}
                    />
                    <Card
                        title={'Brunschetta'}
                        price={'$14.99'}
                        imgSrc={brunchetta}
                        imgAlt={'Brunschetta'}
                        description={'some text goes here'}
                    />
                    <Card
                        title={'Lemon Dessert'}
                        price={'$12.99'}
                        imgSrc={lemonDessert}
                        imgAlt={'Lemon cake'}
                        description={'some text goes here'}
                    />
                </div>
            </div>
        </section>
    )
};


export const Testimonials = ({}) => {
    return(
        <section>
            <div className="container">
                <div className="even-column">
                    <Testimony
                    imgSrc={examplePic}
                    imgAlt={'example image'}
                    rating={'*****'}
                    review={'some text goes here'}
                    name={'Mary'}
                    />

                    <Testimony
                        imgSrc={examplePic}
                        imgAlt={'example image'}
                        rating={'*****'}
                        review={'some text goes here'}
                        name={'Mary'}
                    />

                    <Testimony
                        imgSrc={examplePic}
                        imgAlt={'example image'}
                        rating={'*****'}
                        review={'some text goes here'}
                        name={'Mary'}
                    />

                    <Testimony
                        imgSrc={examplePic}
                        imgAlt={'example image'}
                        rating={'*****'}
                        review={'some text goes here'}
                        name={'Mary'}
                    />
                </div>
            </div>
        </section>
    )
}


export default Hero;





