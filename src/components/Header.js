import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <div className="flex gap-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/todos" className="text-blue-500 hover:underline">Todos</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
