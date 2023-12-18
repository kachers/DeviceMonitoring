'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState<string>('/devices');

  const value: AppState = {
    activeComponent,
    setActiveComponent,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};