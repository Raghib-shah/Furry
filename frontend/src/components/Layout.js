import React from 'react';
import { PopupProvider, usePopup } from '../context/PopupContext';
import Navbar from './Navbar';
import Footer from './Footer';
import CommissionPopup from './CommissionPopup';

const LayoutContent = ({ children }) => {
  const { isPopupOpen, popupCampaign, closePopup } = usePopup();

  return (
    <div className="min-h-screen bg-bgMain text-textMain">
      <Navbar />
      <main>{children}</main>
      <Footer />
      {isPopupOpen && (
        <CommissionPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          campaign={popupCampaign}
        />
      )}
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <PopupProvider>
      <LayoutContent>{children}</LayoutContent>
    </PopupProvider>
  );
};

export default Layout;

