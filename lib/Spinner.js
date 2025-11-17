import React from 'react';
import './Spinner.css';

const Spinner = ({ 
  type = 'ring',
  size = 5,
  color = '#61dafb',
  secondaryColor = '#ffffff',
  backgroundColor = '#282c34',
  speed = 1,
  borderWidth = 3,
  style = {}
}) => {
  const spinnerStyle = {
    width: `${size}rem`,
    height: `${size}rem`,
    animation: `spin ${speed}s linear infinite`,
    ...style
  };

  // Normalize type to handle both string names and numbers for backward compatibility
  const normalizedType = typeof type === 'number' ? type : type.toLowerCase();

  // Ring Spinner - Circle with rotating border
  if (normalizedType === 1 || normalizedType === 'ring' || normalizedType === 'circle') {
    return (
      <div className="spinner spinner-ring" style={spinnerStyle}>
        <span style={{ 
          borderTopColor: color,
          borderWidth: `${borderWidth}px`
        }}></span>
      </div>
    );
  }

  // Dual Spinner - Half-circle with two colors
  if (normalizedType === 2 || normalizedType === 'dual' || normalizedType === 'half-circle') {
    return (
      <div className="spinner spinner-dual" style={spinnerStyle}>
        <div style={{ backgroundColor: color }}></div>
        <div className="spinner-dual-inner" style={{ backgroundColor }}></div>
        <div style={{ backgroundColor: secondaryColor }}></div>
      </div>
    );
  }

  // Dots Spinner - Four-quadrant compact spinner
  if (normalizedType === 3 || normalizedType === 'dots' || normalizedType === 'quadrant') {
    return (
      <div className="spinner spinner-dots" style={spinnerStyle}>
        <div className="inner-block" style={{ backgroundColor: color }}></div>
        <div className="inner-block"></div>
        <div className="spinner-dots-inner" style={{ backgroundColor }}></div>
        <div className="inner-block"></div>
        <div className="inner-block" style={{ backgroundColor: color }}></div>
      </div>
    );
  }

  // Pulse Spinner - Growing and shrinking circle
  if (normalizedType === 4 || normalizedType === 'pulse' || normalizedType === 'bounce') {
    return (
      <div className="spinner spinner-pulse" style={{ ...spinnerStyle, animation: `pulse ${speed}s ease-in-out infinite` }}>
        <div style={{ backgroundColor: color }}></div>
      </div>
    );
  }

  // Bars Spinner - Three vertical bars
  if (normalizedType === 5 || normalizedType === 'bars' || normalizedType === 'wave') {
    return (
      <div className="spinner spinner-bars" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s`, animationDelay: `${speed * 0.15}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s`, animationDelay: `${speed * 0.3}s` }}></div>
      </div>
    );
  }

  // Rotating Squares Spinner - Two squares rotating in opposite directions
  if (normalizedType === 6 || normalizedType === 'grid' || normalizedType === 'squares') {
    return (
      <div className="spinner spinner-rotating-squares" style={{ ...spinnerStyle, animation: 'none' }}>
        <div 
          style={{ 
            borderColor: color,
            animationDuration: `${speed}s`
          }}
        ></div>
        <div 
          style={{ 
            borderColor: color,
            animationDuration: `${speed * 1.5}s`
          }}
        ></div>
      </div>
    );
  }

  // Double Ring - Two concentric rings
  if (normalizedType === 7 || normalizedType === 'double-ring' || normalizedType === 'orbit') {
    return (
      <div className="spinner spinner-double-ring" style={{ ...spinnerStyle, animation: 'none' }}>
        <div 
          className="outer-ring"
          style={{ 
            borderTopColor: color,
            borderWidth: `${borderWidth}px`,
            animationDuration: `${speed}s`
          }}
        ></div>
        <div 
          className="inner-ring"
          style={{ 
            borderTopColor: secondaryColor,
            borderWidth: `${borderWidth}px`,
            animationDuration: `${speed * 0.75}s`
          }}
        ></div>
      </div>
    );
  }

  // Spinner Dots - Circle of dots
  if (normalizedType === 8 || normalizedType === 'circle-dots' || normalizedType === 'dots-circle') {
    return (
      <div className="spinner spinner-circle-dots" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`,
              animationDelay: `${(speed * i) / 8}s`,
              transform: `rotate(${i * 45}deg) translateY(-150%)`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Flip Spinner - Flipping card effect
  if (normalizedType === 9 || normalizedType === 'flip' || normalizedType === 'card') {
    return (
      <div className="spinner spinner-flip" style={{ ...spinnerStyle, animation: `flip ${speed}s ease-in-out infinite` }}>
        <div style={{ backgroundColor: color }}></div>
      </div>
    );
  }

  // Gooey Spinner - Merging dots effect
  if (normalizedType === 10 || normalizedType === 'gooey' || normalizedType === 'merge') {
    return (
      <div className="spinner spinner-gooey" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Corner Spinner - Dot moving through corners
  if (normalizedType === 11 || normalizedType === 'corner' || normalizedType === 'square') {
    return (
      <div className="spinner spinner-corner" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
      </div>
    );
  }

  // Ripple Spinner - Expanding circles
  if (normalizedType === 12 || normalizedType === 'ripple' || normalizedType === 'wave-circle') {
    return (
      <div className="spinner spinner-ripple" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ borderColor: color, animationDuration: `${speed * 2}s` }}></div>
        <div style={{ borderColor: color, animationDuration: `${speed * 2}s` }}></div>
      </div>
    );
  }

  // Pendulum Spinner - Swinging dot
  if (normalizedType === 13 || normalizedType === 'pendulum' || normalizedType === 'swing') {
    return (
      <div className="spinner spinner-pendulum" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Snake Spinner - Vertical bars with wave effect
  if (normalizedType === 14 || normalizedType === 'snake' || normalizedType === 'equalizer') {
    return (
      <div className="spinner spinner-snake" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Bounce Dots - Three bouncing dots
  if (normalizedType === 15 || normalizedType === 'bounce-dots' || normalizedType === 'jumping') {
    return (
      <div className="spinner spinner-bounce-dots" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Spiral Spinner - Dots spiraling outward
  if (normalizedType === 16 || normalizedType === 'spiral') {
    return (
      <div className="spinner spinner-spiral" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
      </div>
    );
  }

  // Clock Spinner - Clock hand rotating
  if (normalizedType === 17 || normalizedType === 'clock' || normalizedType === 'hand') {
    return (
      <div 
        className="spinner spinner-clock" 
        style={{ 
          ...spinnerStyle, 
          borderColor: color,
          color: color,
          animation: 'none'
        }}
      >
        <style>{`.spinner-clock::before { animation-duration: ${speed}s !important; }`}</style>
      </div>
    );
  }

  // Gradient Spinner - Conic gradient rotation
  if (normalizedType === 18 || normalizedType === 'gradient' || normalizedType === 'conic') {
    return (
      <div 
        className="spinner spinner-gradient" 
        style={{ 
          ...spinnerStyle, 
          color: color,
          animationDuration: `${speed}s`
        }}
      ></div>
    );
  }

  // Zigzag Spinner - Dot moving left to right
  if (normalizedType === 19 || normalizedType === 'zigzag' || normalizedType === 'slider') {
    return (
      <div className="spinner spinner-zigzag" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Orbit Spinner - Dot orbiting around circle
  if (normalizedType === 20 || normalizedType === 'orbit' || normalizedType === 'planet') {
    return (
      <div 
        className="spinner spinner-orbit" 
        style={{ 
          ...spinnerStyle, 
          borderColor: `${color}40`,
          animation: 'none'
        }}
      >
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Square Spin - Square morphing to circle
  if (normalizedType === 21 || normalizedType === 'square-spin' || normalizedType === 'morph') {
    return (
      <div className="spinner spinner-square-spin" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Slice Spinner - Pie slice rotating
  if (normalizedType === 22 || normalizedType === 'slice' || normalizedType === 'pie') {
    return (
      <div className="spinner spinner-slice" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Bouncing Ball Spinner - Ball bouncing up and down
  if (normalizedType === 23 || normalizedType === 'ping' || normalizedType === 'sonar') {
    return (
      <div className="spinner spinner-bouncing-ball" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Infinity Spinner - Figure 8 pattern
  if (normalizedType === 24 || normalizedType === 'infinity' || normalizedType === 'figure8') {
    return (
      <div className="spinner spinner-infinity" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed * 2}s` }}></div>
      </div>
    );
  }

  // Windmill Spinner - Square rotating with changing border radius
  if (normalizedType === 25 || normalizedType === 'windmill' || normalizedType === 'propeller') {
    return (
      <div className="spinner spinner-windmill" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Hexagon Spinner - Rotating hexagon
  if (normalizedType === 26 || normalizedType === 'hexagon') {
    return (
      <div className="spinner spinner-hexagon" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Triangle Spin Spinner - Rotating triangle
  if (normalizedType === 27 || normalizedType === 'triangle-spin' || normalizedType === 'triangle') {
    return (
      <div className="spinner spinner-triangle-spin" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ borderBottomColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Diamond Spinner - Rotating diamond
  if (normalizedType === 28 || normalizedType === 'diamond') {
    return (
      <div className="spinner spinner-diamond" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Star Spinner - Rotating star
  if (normalizedType === 29 || normalizedType === 'star') {
    return (
      <div className="spinner spinner-star" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Spinner Crosses - Rotating crosses
  if (normalizedType === 30 || normalizedType === 'gear' || normalizedType === 'cog') {
    return (
      <div className="spinner spinner-crosses" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`,
              animationDelay: `${(speed * i) / 4}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Dots Wave Spinner - Horizontal wave of dots
  if (normalizedType === 31 || normalizedType === 'dots-wave') {
    return (
      <div className="spinner spinner-dots-wave" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Worm Spinner - Stretching worm
  if (normalizedType === 32 || normalizedType === 'worm') {
    return (
      <div className="spinner spinner-worm" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Squares Rotate Spinner - Four rotating squares
  if (normalizedType === 33 || normalizedType === 'squares-rotate') {
    return (
      <div className="spinner spinner-squares-rotate" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Pulse Ring Spinner - Pulsing ring with growing effect
  if (normalizedType === 34 || normalizedType === 'helix' || normalizedType === 'dna') {
    return (
      <div className="spinner spinner-pulse-ring" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              borderColor: color,
              animationDuration: `${speed * 1.5}s`,
              animationDelay: `${(speed * i * 0.5)}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Circles Merge Spinner - Two circles merging
  if (normalizedType === 35 || normalizedType === 'circles-merge') {
    return (
      <div className="spinner spinner-circles-merge" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(2)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Atom Spinner - Orbiting electrons
  if (normalizedType === 36 || normalizedType === 'atom') {
    return (
      <div className="spinner spinner-atom" style={{ ...spinnerStyle, color: color, animation: 'none' }}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Bullet Spinner - Bullet firing from gun
  if (normalizedType === 37 || normalizedType === 'roller') {
    return (
      <div className="spinner spinner-bullet" style={{ ...spinnerStyle, animation: 'none' }}>
        <div className="gun" style={{ borderColor: color }}></div>
        <div className="bullet" style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Cascade Spinner - Cascading squares
  if (normalizedType === 38 || normalizedType === 'cascade') {
    return (
      <div className="spinner spinner-cascade" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Blockchain Spinner - Connected blocks
  if (normalizedType === 39 || normalizedType === 'blockchain') {
    return (
      <div className="spinner spinner-blockchain" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Heartbeat Spinner - Pulsing heart
  if (normalizedType === 40 || normalizedType === 'heartbeat' || normalizedType === 'heart') {
    return (
      <div className="spinner spinner-heartbeat" style={{ ...spinnerStyle, color: color, animation: 'none' }}>
        <div style={{ animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Flower Spinner - Blooming flower
  if (normalizedType === 41 || normalizedType === 'flower' || normalizedType === 'bloom') {
    return (
      <div className="spinner spinner-flower" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Radar Spinner - Radar sweep
  if (normalizedType === 42 || normalizedType === 'radar' || normalizedType === 'sweep') {
    return (
      <div className="spinner spinner-radar" style={{ ...spinnerStyle, borderColor: color, color: color, animation: 'none', borderRadius: '50%' }}>
        <style>{`.spinner-radar::before { animation-duration: ${speed}s !important; }`}</style>
      </div>
    );
  }

  // Spinner Blocks - Rotating blocks forming circle
  if (normalizedType === 43 || normalizedType === 'wave-circle') {
    return (
      <div className="spinner spinner-blocks" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`,
              animationDelay: `${(speed * i) / 8}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Pacman Spinner - Pacman eating dots
  if (normalizedType === 44 || normalizedType === 'pacman') {
    return (
      <div className="spinner spinner-pacman" style={{ ...spinnerStyle, color: color, animation: 'none' }}>
        <style>{`.spinner-pacman::before { animation-duration: ${speed * 0.5}s !important; }`}</style>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Hourglass Spinner - Rotating hourglass
  if (normalizedType === 45 || normalizedType === 'hourglass') {
    return (
      <div className="spinner spinner-hourglass" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ borderBottomColor: color, animationDuration: `${speed * 2}s` }}>
          <style>{`.spinner-hourglass div::after { border-top-color: ${color} !important; }`}</style>
        </div>
      </div>
    );
  }

  // Cube Fold Spinner - Folding cube
  if (normalizedType === 46 || normalizedType === 'cube-fold') {
    return (
      <div className="spinner spinner-cube-fold" style={{ ...spinnerStyle, animation: 'none' }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed * 2}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Dashed Ring Spinner - Dashed rotating ring
  if (normalizedType === 47 || normalizedType === 'dashed-ring') {
    return (
      <div className="spinner spinner-dashed-ring" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ borderColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Newton Cradle Spinner - Newton's cradle
  if (normalizedType === 48 || normalizedType === 'newton-cradle' || normalizedType === 'cradle') {
    return (
      <div className="spinner spinner-newton-cradle" style={{ ...spinnerStyle, color: color, animation: 'none' }}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  // Metronome Spinner - Swinging metronome
  if (normalizedType === 49 || normalizedType === 'metronome') {
    return (
      <div className="spinner spinner-metronome" style={{ ...spinnerStyle, animation: 'none' }}>
        <div style={{ backgroundColor: color, animationDuration: `${speed}s` }}></div>
      </div>
    );
  }

  // Spinner Box - Box with spinning corners
  if (normalizedType === 50 || normalizedType === 'spinner-box' || normalizedType === 'box') {
    return (
      <div className="spinner spinner-spinner-box" style={{ ...spinnerStyle, borderColor: color, animation: 'none' }}>
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            style={{ 
              backgroundColor: color,
              animationDuration: `${speed}s`
            }}
          ></div>
        ))}
      </div>
    );
  }

  return null;
};

export default Spinner;
