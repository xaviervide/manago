import './redirect.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Redirect () {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home/login')
  }, []);

  return (
    <div className="redirect-container">
  
    </div>
  );
}

export default Redirect;
