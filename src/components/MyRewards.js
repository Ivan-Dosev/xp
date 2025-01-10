import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import BadgeCard from './BadgeCard';
import './MyRewards.css';

const MyRewards = ({ onBack, onNavigate, activePage = 'my-rewards' }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuCategories = [
    { key: 'all', label: 'ALL REWARDS' },
    { key: 'stadium', label: 'STADIUM' },
    { key: 'merch', label: 'MERCH' },
    { key: 'other', label: 'OTHER' },
  ];

  // Updated rewards badges data with categories
  const rewardBadges = [
    { 
      id: 'r001', 
      title: 'Stadion1\nCollection 2024/2025',
      image: '/images/rewards/stadium/Stadion1.png',
      category: 'stadium'
    },
    { 
      id: 'r002', 
      title: 'Stadion2\nCollection 2024/2025',
      image: '/images/rewards/stadium/Stadion2.png',
      category: 'stadium'
    },
    { 
      id: 'r003', 
      title: 'Stadion3\nCollection 2024/2025',
      image: '/images/rewards/stadium/Stadion3.png',
      category: 'stadium'
    },
    { 
      id: 'r004', 
      title: 'Player1\nCollection 2024/2025',
      image: '/images/rewards/player/Player1.png',
      category: 'other'
    },
    { 
      id: 'r005', 
      title: 'Player2\nCollection 2024/2025',
      image: '/images/rewards/player/Player2.png',
      category: 'other'
    },
    { 
      id: 'r006', 
      title: 'Player3\nCollection 2024/2025',
      image: '/images/rewards/player/Player3.png',
      category: 'other'
    }
  ];

  const handleBadgeClick = (badge) => {
    console.log('Clicked reward badge:', badge);
  };

  // Add filter function for rewards
  const getFilteredRewards = () => {
    if (activeCategory === 'all') {
      return rewardBadges;
    }
    return rewardBadges.filter(badge => badge.category === activeCategory);
  };

  return (
    <div className="my-rewards">
      <header className="rewards-header">
        <BurgerMenu onNavigate={onNavigate} />
        <h1 onClick={onBack} className="clickable-title">
          <span className="horizon">XP PLUS</span>
        </h1>
      </header>
      
      <nav className="menu-bar">
        {menuCategories.map((category) => (
          <button
            key={category.key}
            className={`menu-button ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </nav>

      <div className="rewards-content">
        <h2>My Rewards</h2>
        <div className="badge-list">
          {getFilteredRewards().map((badge, index) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              onClick={handleBadgeClick}
              style={{ zIndex: rewardBadges.length - index }}
            />
          ))}
        </div>
      </div>

      <footer className="app-footer">
        <button 
          onClick={() => onNavigate('more-badges')}
          className={activePage === 'more-badges' ? 'active' : ''}
        >
          More Badges
        </button>
        <button 
          onClick={() => onNavigate('my-rewards')}
          className={activePage === 'my-rewards' ? 'active' : ''}
        >
          My Rewards
        </button>
      </footer>
    </div>
  );
};

export default MyRewards;