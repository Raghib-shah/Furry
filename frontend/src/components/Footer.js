import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-borderSoft mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Furryweb
            </h3>
            <p className="text-textMuted text-sm">
              Bringing your fursona to life with high-quality art commissions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <Link to="/services/refsheets" className="hover:text-primary transition-colors">
                  Reference Sheets
                </Link>
              </li>
              <li>
                <Link to="/services/drawings" className="hover:text-primary transition-colors">
                  Drawings
                </Link>
              </li>
              <li>
                <Link to="/services/icons" className="hover:text-primary transition-colors">
                  Icons
                </Link>
              </li>
              <li>
                <Link to="/services/stickers" className="hover:text-primary transition-colors">
                  Stickers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <Link to="/our-work" className="hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/pride" className="hover:text-primary transition-colors">
                  Pride Special
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-borderSoft text-center text-sm text-textMuted">
          <p>&copy; {new Date().getFullYear()} Furryweb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

