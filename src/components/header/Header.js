import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {

  state = {
    closed: true
  }

  toggleMenu() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <div id='header'>
        <div className="header_wrapper">
          <div className="logo_container">
            <Link to="/">
              {/* <img src='' alt="phind logo"/> */}
              <h2>PHIND</h2>
            </Link>
          </div>

          <div className="menu_btn_wrapper">
            <button className={this.state.closed? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={this.toggleMenu.bind(this)}>
              <div className="menu_btn_line"></div>
              <div className="menu_btn_line"></div>
            </button>
          </div>
        </div>

        { 
          !this.state.closed ? (
            <nav>
              <div className="mobile_menu_container">
                <ul>
                  <li><Link to='/' onClick={this.toggleMenu.bind(this)}>Home</Link> </li>
                  <li><Link to='/buy_property' onClick={this.toggleMenu.bind(this)}>Buy Property</Link> </li>
                  <li><Link to='/sell_property' onClick={this.toggleMenu.bind(this)}>Sell Property</Link> </li>
                  <li><Link to='/rent' onClick={this.toggleMenu.bind(this)}>Rent A Home</Link> </li>
                  <li><Link to='/about' onClick={this.toggleMenu.bind(this)}>About Us</Link> </li>

                </ul>

                {/* <div className="social_box">
                <h3>Connect With Me</h3>
                  <div className="social_icons">
                    <a href="https://github.com/kadetXx"><i className='fab fa-github'></i></a> 
                    <a href="https://twitter.com/kadetXx"><i className='fab fa-twitter'></i></a>
                    <a href="https://www.linkedin.com/in/collins-enebeli-online/"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div> */}
              </div>
            </nav>
          ) : ''
        }
      </div>
    )
  }
}

export default Header
