
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: '10 Steps to Accepted', path: '/10-steps-to-accepted' },
    { name: 'MCAT Prep Courses Review', path: '/mcat-prep-courses' },
    { name: 'Admissions Secrets', path: '/admissions-secrets' },
    { name: 'Interview Tips', path: '/interview-tips' },
    { name: 'Personal Statement Strategy', path: '/personal-statement' },
    { name: 'About Dr. Mike', path: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="text-xl md:text-2xl font-merriweather font-bold text-primary">
              Medical School Insider
            </Link>
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 italic mt-1 md:mt-0">
            Helping YOU Get Into Medical School
          </p>
        </div>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-8`}>
          <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? "nav-link-active" : "nav-link"}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
