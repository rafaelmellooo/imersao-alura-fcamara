import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Location } from './Location';
import { ReturnToOffice } from "./ReturnToOffice";
import { Security } from './Security';
import { Sidebar } from "./Sidebar";

const App: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <Header setSidebarVisible={setSidebarVisible} />
      <main>
        <Home />
        <Location />
        <Security />
        <ReturnToOffice />
      </main>
      <Footer />

      <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
    </>
  );
}

export { App };
