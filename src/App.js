import { useEffect } from "react";
import Friends from "./components/Friends";
import HomeScreen from "./components/HomeScreen";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeScreen />
      <Friends />
    </div>
  );
}

export default App;
