import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = (props) => {
  const { sqSize, strokeWidth, timeLeft } = props;
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (timeLeft / 86400) * dashArray;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </text>
      <text
        className="circle-text-sm"
        x="50%"
        y="60%"
        dy="1em"
        textAnchor="middle"
      >
        Time Left
      </text>
    </svg>
  );
};

CircularProgressBar.propTypes = {
  sqSize: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string.isRequired,
  timeLeft: PropTypes.number.isRequired, // Time left in seconds
};

export default CircularProgressBar;
