import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="bg-white-500 text-black fixed w-full top-0 left-0 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
        <img src="https://www.neevhq.com/neev.svg" alt="Logo Icon" className="w-6 h-6 mr-2" />
        <div className="text-3xl">neev</div>
        </div> 
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:border-blue-500 rounded-md px-3 py-2 border-black border-2">Home</a>
          <a href="#aboutUs" className="hover:border-blue-500 rounded-md px-3 py-2 border-black border-2">Team</a>
          <a href="#contact" className="hover:border-blue-500 rounded-md px-3 py-2 border-black border-2">Contact</a>
          <a href="#careers" className="hover:border-blue-500 rounded-md px-3 py-2 border-black border-2">Careers</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white-500">
          <a href="#home" className="block px-4 py-2 hover:underline">Home</a>
          <a href="#aboutUs" className="block px-4 py-2 hover:underline">About Us</a>
          <a href="#contact" className="block px-4 py-2 hover:underline">Contact</a>
          <a href="#careers" className="block px-4 py-2 hover:underline">Careers</a>
        </div>
      )}
    </nav>
    <section className={`bg-gray-100 py-10 ${isOpen ? 'mt-64' : 'mt-20'}`}> 
      <div className="container mx-auto px-4"> 
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2> 
        <div className='flex justify-between'>
        <div className="mb-6"> 
          <h3 className="text-xl font-semibold">Our Office</h3> 
          <p>123 Main Street, Suite 100<br />Bengaluru East, Karnataka, India<br />Phone: +91-123-456-7890</p>
        </div>
        <div className='flex space-x-4'>
          <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" className='w-8 h-8'></img></a>
          <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/15281/15281507.png" className='w-10 h-10'></img></a>
          <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" className='w-8 h-8'></img></a>
        </div>
        </div>     
      </div>
    </section>
    </div>
  );
};

export default App;
