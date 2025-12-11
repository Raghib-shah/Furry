import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="block group">
      <div className="bg-surface border border-borderSoft rounded-2xl p-6 hover:border-primary transition-all duration-300">
        <div className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted mb-4 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <span>Image Placeholder</span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-textMuted">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;

