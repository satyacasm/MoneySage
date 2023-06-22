import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const tooltipStyle = {
    position: 'absolute',
    backgroundColor: '#1a202c',
    color: 'white',
    fontSize: '0.75rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    opacity: isTooltipVisible ? 1 : 0,
    transition: 'opacity 200ms ease-in-out',
  };

  return (
    <div style={{ position: 'relative' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <div style={tooltipStyle}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
