import React, { Component } from 'react';
import './App.css';
import { InputForm } from './components/InputForm/InputForm';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="App-title">Hourly</h1>
          <p>A simple rate calculator</p>
        </header>
        <section id="">
          <h2>Input your <span>Time</span> and a <span>Rate</span></h2>
          <div className="container">
            <InputForm />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
