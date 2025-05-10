
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Medical School Insider</h3>
            <p className="mb-4">Helping YOU Get Into Medical School</p>
            <p className="text-sm text-gray-600">
              Put a Former UCLA Medical School Admissions Committee Member on Your Side!
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/10-steps-to-accepted" className="hover:text-primary">10 Steps to Accepted</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Dr. Mike</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Connect</h3>
            <p className="mb-2">Get Expert Guidance on Your Medical School Quest</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-4 py-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="First Name" 
                className="px-4 py-2 border rounded"
              />
              <button className="btn-primary">Start the Journey</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>
              © {currentYear} Medical School Insider. All Rights Reserved. 
              Any information you submit on this site is private.
            </p>
            <p>
              <span className="block md:inline">DISCLOSURE: This page may contain affiliate links, </span>
              <span className="block md:inline">meaning when you click the links and make a purchase, we receive a commission.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
