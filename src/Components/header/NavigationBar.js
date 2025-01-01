import React from 'react';
import Logo from '../../asserts/Logo.png';
import '../header/NavigationBar.css';
import { Button } from '@mui/material';

export default function NavigationBar() {
  return (
    <header className="nav">
      <div className="container-fluid">
        
        <div className="part-1">
          <img src={Logo} alt="Company Logo" height={100} width={100} />
        </div>

        <div className="part-2">
          <nav>
            <ul >
              <li className="list-inline-item">
                <Button>Home</Button>
              </li>
              <li className="list-inline-item">
                <Button>Menu</Button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="part-3">
        </div>
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