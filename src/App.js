import './App.css';
import Main from './components/Main.jsx'; 
import Films from './components/Films.jsx'; 
import FilmsDetails from './components/FilmsDetails.jsx'; 
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <div className='App'>
      <Routes>
        <Route path="/"  element={<Main />} />
        <Route path="/films"  element={<Films />} />
        <Route path="/films/:id" element={<FilmsDetails />} />
      </Routes>
    </div>
   
    
    
  );
}

export default App;
