import React from 'react'
import 'bootstrap'
import Header from './components/Header'
import './theme.css'
import "./App.css";

function App() {
  return (
    <div className="App container text-primary bg-secondary pb-4">
      <Header/>
      <h1>Welcome to GoodListens</h1>
      <h4>Your podcast place.</h4>
    </div>
  );
}

export default App;
