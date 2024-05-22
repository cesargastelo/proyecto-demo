"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebars/Sidebar';
import Header from '../components/Headers/Header';
import MainContent from '../components/MainContent';

export default function App () {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <MainContent />
      </div>
    </div>
  );
}
