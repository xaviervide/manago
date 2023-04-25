import { useEffect } from 'react';
import './loading.css';
import { useNavigate } from 'react-router-dom';

function Loading () {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
