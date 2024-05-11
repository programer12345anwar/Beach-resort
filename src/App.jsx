import {Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'; 
import Rooms from './pages/Rooms.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
// import singleRoom from './pages/singleRoom.jsx';

function App() {
   

  return (
    <>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
