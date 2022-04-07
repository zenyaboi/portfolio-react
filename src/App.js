import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Layout />
    </>
  );
}

export default App;
