import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Location } from './Location';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export { App };
