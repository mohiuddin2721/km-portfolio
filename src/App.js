import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/home/Blog';
import Home from './components/home/Home';
import Footer from './components/sharedPages/Footer';
import NavBar from './components/sharedPages/NavBar';

function App() {
  return (
    <div>
      <div className="max-w-7xl p-10 mx-auto scroll-smooth">
        <div className='sticky top-0 z-50'>
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='blog' element={<Blog></Blog>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
      
    </div>
  );
}

export default App;
