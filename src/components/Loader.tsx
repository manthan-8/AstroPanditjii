import React from 'react';

const Loader: React.FC<{ logoSrc: string; size?: number }> = ({ logoSrc, size = 100 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm">
      {/* Yellow circular bg wrapper */}
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: '#FACC15', // Tailwind's yellow-400 hex code
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(255, 159, 10, 0.7)',
          animation: 'spinY 1.5s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={logoSrc}
          alt="Loading..."
          style={{
            width: size * 0.7,  // thoda chota image circle me fit ho jaye
            height: size * 0.7,
            filter: 'brightness(0) invert(0)', // black color maintain karne ke liye
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes spinY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
