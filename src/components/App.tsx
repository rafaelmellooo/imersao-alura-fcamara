import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { Location } from './Location';
import { Security } from './Security';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Location />
        <Security />
      </main>
      <Footer />
    </>
  );
}

export { App };
