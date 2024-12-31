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
            <ul className="list-inline mb-0">
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
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}