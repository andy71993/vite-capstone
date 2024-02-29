import Hero, { Highlight, Testimonials } from "./components/HomeComponents.jsx"

const Home = ({}) =>{
    return(
        <main className="text-clr-primary-900">
            <Hero />
            <Highlight />
            <Testimonials />
        </main>
    )
}

export default Home