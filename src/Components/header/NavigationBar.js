import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Modal,
  Box,
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../../asserts/Logo.png';
import '../header/NavigationBar.css';
import GradientText from './GradientText';
import Login from '../header/Login';

export default function NavigationBar() {
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);

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
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                The Burger King
              </GradientText>
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
              <li>
                <Button variant="outlined" color="tertiary" onClick={() => setOpenLogin(true)}>
                  Login
                </Button>
              </li>
              <li>
                <Button variant="contained" color="info">
                  Sign Up
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Login Modal */}
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Login onClose={() => setOpenLogin(false)} />
        </Box>
      </Modal>
    </header>
  );
}

