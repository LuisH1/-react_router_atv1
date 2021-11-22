import React from 'react';
import Routs from './routes.js'
import Header from './components/header/index'
import Footer from './components/footer/index'
import history from './services/history'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Header />
      <Routs></Routs>
        <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;