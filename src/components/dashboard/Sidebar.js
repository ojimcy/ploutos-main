import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaWallet } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import './dashboard.css';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [loginOption, setLoginOption] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const connectWallet = () => {
    // Logic to connect the wallet and retrieve the address
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    setWalletAddress(address);
  };

  const disconnectWallet = () => {
    setWalletAddress('');
  };

  const handleLoginOptionChange = (option) => {
    setLoginOption(option);
  };

  useEffect(() => {
    if (loginOption === 'wallet') {
      connectWallet();
    }
  }, [loginOption]);

  return (
    <>
      <div className="sidenav-container">
        <div className="nav-header">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="logo" className="logo-abbr" />
          </Link>
        </div>

        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">
                    {isMobileDevice && (
                      <div className="navicon" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                      </div>
                    )}
                  </div>
                </div>
                <div className="navbar-nav header-right">
                  {walletAddress ? (
                    <div className="header-profile">
                      <UncontrolledDropdown>
                        <DropdownToggle className="p-0" color="empty">
                          <Link
                            to="#"
                            className="dashboard-btn connect-btn"
                            onClick={connectWallet}
                          >
                            <FaWallet />{' '}
                            {`${walletAddress.substring(
                              0,
                              6
                            )}...${walletAddress.substring(
                              walletAddress.length - 4
                            )}`}
                          </Link>
                        </DropdownToggle>
                        <DropdownMenu className="mt-3" end>
                          <DropdownItem onClick={disconnectWallet}>
                            Disconnect
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  ) : (
                    <UncontrolledDropdown>
                      <DropdownToggle className="p-0" color="empty">
                        <Link to="#" className="dashboard-btn connect-btn">
                          Login{' '}
                        </Link>
                      </DropdownToggle>
                      <DropdownMenu className="mt-3" end>
                        <DropdownItem
                          onClick={() => handleLoginOptionChange('wallet')}
                        >
                          Connect Wallet
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => handleLoginOptionChange('telegram')}
                        >
                          Login with Telegram
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
