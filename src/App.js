import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyStack from "./components/MyStack";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <MyWork />
      <MyStack />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
