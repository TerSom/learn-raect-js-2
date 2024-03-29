import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton';
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  const navText = "Sosmed"
  const navHeading = "Navigation Bar"

  const clicked = () => {
    return alert("button di pencet");
  }

  const paragraf = () => {
    return (
      <div>
        <h3>gg gaming</h3>
        <i>anjay gg</i>
        <marquee>umay</marquee>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading}></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GG COY
        </p>
        <MyButton clicked={clicked}></MyButton>
        <Footer paragraf={paragraf}></Footer>
      </header>
    </div>
  );
}

export default App;
