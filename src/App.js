import React, { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import MyStack from "./components/MyStack";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import VerCon from "./components/VerCon";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <DNA
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
          <MyWork />
          <MyStack />
          <Contact />
          <Socials />
          <VerCon />
        </>
      )}
    </div>
  );
}

export default App;
