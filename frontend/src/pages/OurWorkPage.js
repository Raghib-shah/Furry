import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import WorkItemCard from '../components/WorkItemCard';

const OurWorkPage = () => {
  const [filter, setFilter] = useState('All');

  const workItems = [
    { id: 1, type: 'Ref Sheet', quote: 'Amazing quality!', name: 'Alex', stars: 5 },
    { id: 2, type: 'Drawing', quote: 'Perfect pose and expression!', name: 'Sam', stars: 5 },
    { id: 3, type: 'Icon', quote: 'Love my new profile picture!', name: 'Jordan', stars: 5 },
    { id: 4, type: 'Stickers', quote: 'So many cute designs!', name: 'Casey', stars: 5 },
    { id: 5, type: 'Ref Sheet', quote: 'Professional and detailed.', name: 'Riley', stars: 5 },
    { id: 6, type: 'Drawing', quote: 'Exceeded my expectations!', name: 'Taylor', stars: 5 },
    { id: 7, type: 'Icon', quote: 'Perfect for Discord!', name: 'Avery', stars: 5 },
    { id: 8, type: 'Stickers', quote: 'Great value for multiple designs.', name: 'Quinn', stars: 5 },
    { id: 9, type: 'Ref Sheet', quote: 'Worth every penny!', name: 'Morgan', stars: 5 },
  ];

  const filteredItems = filter === 'All' 
    ? workItems 
    : workItems.filter(item => item.type === filter || item.type === filter + 's');

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Browse through our portfolio of completed commissions.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Ref Sheet', 'Drawing', 'Icon', 'Stickers'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  filter === type
                    ? 'bg-primary text-textMain'
                    : 'bg-surface border border-borderSoft text-textMuted hover:border-primary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <WorkItemCard
                key={item.id}
                quote={item.quote}
                name={item.name}
                type={item.type}
                stars={item.stars}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Pagination */}
        <AnimatedSection>
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button className="px-4 py-2 bg-surface border border-borderSoft rounded-lg hover:border-primary transition-colors">
              Previous
            </button>
            <span className="text-textMuted">Page 1 of 3</span>
            <button className="px-4 py-2 bg-surface border border-borderSoft rounded-lg hover:border-primary transition-colors">
              Next
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default OurWorkPage;

