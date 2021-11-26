import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Rents from './components/Rents';
import { Header } from './components/header/Header';
import ImageHeader from './components/ImageHeader/ImageHeader';
import Footer from './components/Footer/Footer';
import buyProperty from './components/buyProperty';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreen: '',
    };
  }

  setFullscreen(value) {
    this.setState({...this.state, fullScreen: value})
  }

  render() {
    return (
        <div className='App'>
          <Router>
            <div id={this.state.fullScreen ? "fullscreen" : ''}>

              <Header/>
              <ImageHeader/>
                          
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="rents" element={<Rents />} />
                  <Route path="buy" element={<buyProperty />} />
                </Routes>
              </div>
              <Footer/>
            </div>
          </Router>
            
        </div>
    );
  }
  
}

export default App;
