import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './components/BaseLayout';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
