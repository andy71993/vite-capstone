import './App.css'
import { Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Home'
import Reservations from './Reservations'
import About from './About'
import Menu from './Menu'
import Order from './Order'
import Login from './Login'
import Footer from './components/Footer'
import Header from './components/Header'
import logo from './assets/logo.svg'

function App() {
  return (
    <>
    <Header>
     <img src={logo} alt="logo" className='logo'/>
     <Nav className={'navbar'}/>
    </Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservations' element={<Reservations />} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
