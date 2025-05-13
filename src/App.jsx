import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Destination from './components/destination/Destination'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <img src="/assets/shared/logo.svg" alt="Space Tourism" className="h-10" />
        </Link>

        {/* Line */}
        <div className="hidden lg:block flex-1 max-w-[473px] h-[1px] bg-white/20 ml-8 -mr-8"></div>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src="/assets/shared/icon-close.svg" alt="Close Menu" className="h-6" />
          ) : (
            <img src="/assets/shared/icon-hamburger.svg" alt="Open Menu" className="h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <div className={`
          fixed top-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-lg
          transform transition-transform duration-300 ease-in-out
          md:relative md:h-auto md:w-auto md:bg-transparent md:backdrop-blur-xl
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          pt-24 md:pt-6 md:pb-6 md:px-[8rem]
        `}>
          <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-0">
            <li>
              <Link 
                to="/" 
                className={`font-barlow_c text-nav-text ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold mr-2">00</span>
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/destination" 
                className={`font-barlow_c text-nav-text ${isActive('/destination') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold mr-2">01</span>
                DESTINATION
              </Link>
            </li>
            <li>
              <Link 
                to="/crew" 
                className={`font-barlow_c text-nav-text ${isActive('/crew') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold mr-2">02</span>
                CREW
              </Link>
            </li>
            <li>
              <Link 
                to="/technology" 
                className={`font-barlow_c text-nav-text ${isActive('/technology') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold mr-2">03</span>
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 font-barlow bg-body_mobile_hero bg-cover bg-no-repeat bg-center bg-fixed min-[768px]:bg-body_tablet_hero min-[1440px]:bg-body_desktop_hero"></div>
      <div className="relative container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-8 text-center md:text-left">
            <h5 className="font-barlow_c text-md uppercase tracking-[4.75px] text-h1_clr min-[768px]:text-[1.25rem]">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="font-belle text-white text-[5rem] md:text-[9.375rem] leading-none overflow-hidden">SPACE</h1>
            <p className="max-w-[50ch] font-barlow font-normal m-[0] mt-[5px] text-[0.9rem] leading-6 min-[768px]:text-[1rem] min-[1440px]:text-left">
              Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
          </div>
          <div className="flex justify-center">
            <Link 
              to="/destination"
              className="w-48 h-48 rounded-full bg-white text-black text-xl font-belle hover:ring-[40px] hover:ring-white/10 transition-all duration-300 flex items-center justify-center"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
