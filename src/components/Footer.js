import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 mt-8 text-center">
      <p className="text-gray-500">Contact us at contact@todoapp.com</p>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
