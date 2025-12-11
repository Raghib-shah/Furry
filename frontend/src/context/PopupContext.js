import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within PopupProvider');
  }
  return context;
};

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupCampaign, setPopupCampaign] = useState(null);

  const openPopup = (campaign = null) => {
    setPopupCampaign(campaign);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupCampaign(null);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, popupCampaign, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

