import React from 'react';

interface PopupMessageProps {
  message: string;
  onClose: () => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>LOGIN FAILED</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupMessage;