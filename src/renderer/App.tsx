import { Router, Route } from 'electron-router-dom';
import './App.css';
import Home from './Home';
import Table from './Table';

export default function App() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<Table isEdit={false} />} />
          <Route path="/edit" element={<Table isEdit={true} />} />
        </>
      }
    ></Router>
  );
}
