import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import Header from './components/header/Header';
function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <Routes>
      <Route  path='/' element={<Main/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
