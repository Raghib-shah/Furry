import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePopup } from '../context/PopupContext';

const Navbar = () => {
  const { openPopup } = usePopup();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-surface/80 border-b border-borderSoft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Furryweb
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/our-work"
              className={`hover:text-primary transition-colors ${
                isActive('/our-work') ? 'text-primary' : ''
              }`}
            >
              Our Work
            </Link>
            <Link
              to="/services/refsheets"
              className={`hover:text-primary transition-colors ${
                isActive('/services/refsheets') ? 'text-primary' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/faq"
              className={`hover:text-primary transition-colors ${
                isActive('/faq') ? 'text-primary' : ''
              }`}
            >
              FAQ
            </Link>
            <button
              onClick={() => openPopup()}
              className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-6 py-3 transition-colors"
            >
              Commission Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textMain"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/our-work"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              to="/services/refsheets"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/faq"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <button
              onClick={() => {
                openPopup();
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-6 py-3 transition-colors"
            >
              Commission Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

