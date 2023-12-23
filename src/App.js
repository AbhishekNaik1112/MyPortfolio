import About from "./components/About";
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
      <Socials />
    </div>
  );
}

export default App;
