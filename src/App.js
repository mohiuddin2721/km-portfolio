import './App.css';
import Home from './components/home/Home';
import Footer from './components/sharedPages/Footer';
import NavBar from './components/sharedPages/NavBar';

function App() {
  return (
    <div>
      <div className="max-w-7xl p-10 mx-auto scroll-smooth">
        <div className='sticky top-0 z-50'>
          <NavBar></NavBar>
        </div>
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
