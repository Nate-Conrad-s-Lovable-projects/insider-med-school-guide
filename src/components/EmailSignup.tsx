
import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, name });
    // Form submission logic would go here
    setEmail('');
    setName('');
  };
  
  return (
    <div className="bg-gray-100 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Expert Guidance on Your Medical School Quest
          </h2>
          <p className="mb-6 text-gray-700">
            It's a rough road. Don't go it alone! Let me help you get there with expert, tried and true tips, 
            delivered to your inbox, timed for when you need them most.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto">
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-md"
                required
              />
            </div>
            <button type="submit" className="btn-accent">
              Start the Journey
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
