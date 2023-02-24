import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/nav'
import Main from './pages/Main'

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;