import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import './styles/App.css'; // Make sure to create this file for global layout styles
import Profile from './components/Profile';
import Languages from './components/Languages';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <SideBar />

        <div className='main-content'>
          <Routes>

              <Route path="/" element={<Profile />}/>
              <Route path='/languages' element={<Languages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
