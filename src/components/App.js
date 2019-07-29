import React from 'react';
import '../css/App.css';
import InvoiceEditor from './InvoiceEditor/InvoiceEditor'

class App extends React.Component {
  render() {
    return (
      <div className="container">
          <InvoiceEditor/>
      </div>
    );
  }
}


export default App;
