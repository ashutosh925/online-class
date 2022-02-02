import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Navbar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Layout/>
      {/* <Footer/> */}
  </div>
  );
}

export default App;
