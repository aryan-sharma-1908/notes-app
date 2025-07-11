import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Archive from "./pages/Archive";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Bin from "./pages/bin";
import Important from "./pages/Important";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
      <Sidebar/>
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/archive" element={<Archive />}/>
        <Route path="/important" element={<Important/>}/>
        <Route path="/bin" element={<Bin/>}/>
      </Routes>
      </main>
      </div>
    </>
  );
};

export default App;
