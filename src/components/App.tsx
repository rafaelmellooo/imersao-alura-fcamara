import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";

import '../styles/app.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export { App };
