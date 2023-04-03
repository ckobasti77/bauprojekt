import { useState } from "react";

import { Navbar, Applicant } from './components/components';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-screen md:w-[640px] px-5 md:px-0 md:mx-auto">
        <Applicant />
      </div>
    </div>
  );
}

export default App;
