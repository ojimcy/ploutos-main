import React, { createContext, useState } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [currentAccountId, setCurrentAccId] = useState(false);

  const setCurrentAccountId = (id) => {
    id = id || 0;
    setCurrentAccId(id);
    localStorage.setItem('ID', id);
  };

  return (
    <AppContext.Provider
      value={{
        currentAccountId,
        setCurrentAccountId,
        provider,
        setProvider,
        signer,
        setSigner,
        connectedWalletAddress: account,
        setAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
