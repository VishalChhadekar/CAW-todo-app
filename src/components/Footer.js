import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(255,255,255)] text-gray-800 p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mb-4">Contact us at <a href="mailto:contact@todoapp.com" className="text-blue-400 hover:text-blue-500">contact@todoapp.com</a></p>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600">Follow us:</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
        </div>

        <div className="text-sm text-gray-600">
          <a href="/about" className="hover:text-blue-500 mx-2">About Us</a>
          <a href="/privacy" className="hover:text-blue-500 mx-2">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-500 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
