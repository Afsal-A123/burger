import React from 'react';
import Logo from '../../asserts/Logo.png';
import '../header/NavigationBar.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path, { replace: true }); // Navigate without adding to history
  };

  return (
    <header className="nav">
      <div className="container-fluid">
        <div className="part-1">
          <img src={Logo} alt="Company Logo" height={100} width={100} />
        </div>

        <div className="part-2">
          <nav>
            <ul>
              <li className="list-inline-item">
                <Button onClick={() => navigateTo('/Home')}>Home</Button>
              </li>
              <li className="list-inline-item">
                <Button onClick={() => navigateTo('/Menu')}>Menu</Button>
              </li>
              <li className="list-inline-item">
                <Button onClick={() => navigateTo('/Contact')}>Contact</Button>
              </li>
              <li className="list-inline-item">
                <Button onClick={() => navigateTo('/About')}>About Us</Button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="part-3"></div>
        <Button variant="outlined" color="tertiary">
          Login
        </Button>
        <Button variant="contained" color="info">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
