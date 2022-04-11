import "./App.css";
import Logo from "./Components/Logo";
import Intro from "./Components/Intro";
import Form from "./Components/Form";
import Img from "./Components/ModelImg";

const App = () => (
  <div className='App'>
    <div className='content'>
      <Logo />
      <Intro />
      <Form />
    </div>
    <div>
      <Img />
    </div>
  </div>
);

export default App;
