import React from 'react';

const SimpleNotification = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50"
      style={{ 
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: '#10B981',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SimpleNotification;