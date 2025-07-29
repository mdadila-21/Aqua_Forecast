import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-light via-background to-muted">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};