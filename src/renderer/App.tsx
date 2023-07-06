import { Router, Route } from 'electron-router-dom';
import './App.css';
import History from './History';
import Home from './Home';

export default function App() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </>
      }
    ></Router>
  );
}
