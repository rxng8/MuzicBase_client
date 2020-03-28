import React, { Component } from 'react'

import '../App.css';
import ava from '../assets/images/ava.jpg'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "site-navbar mt-4">

                {/* <p className = "no-pad logo">
                    Muzic Base
                </p>

                <div className = "no-pad avatar">
                    <img src = {ava} alt = "Avatar" className = "avatar__img no-pad"/>

                    <p className = "no-pad text__ava ">Alex</p>

                </div>
                 */}

        <div className="container py-1 navbar-fixed-top">
          <div className="row align-items-center">
            <div className="col-8 col-md-8 col-lg-4">
              <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0"><strong>Muzic Base<span className="text-primary">.</span></strong></a></h1>
            </div>
            <div className="col-4 col-md-4 col-lg-8">
              <nav className="site-navigation text-right text-md-right" role="navigation">

                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active">
                    <a href="index.html">News Feed</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Trending</a>
                    <ul className="dropdown arrow-top">
                      <li><a href="#">Top 20 of The Week</a></li>
                      <li><a href="#">Featured Artist</a></li>
                      <li><a href="#">Interviews</a></li>
                      <li className="has-children">
                        <a href="#">Sub Menu</a>
                        <ul className="dropdown">
                          <li><a href="#">Menu One</a></li>
                          <li><a href="#">Menu Two</a></li>
                          <li><a href="#">Menu Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li><a href="contact.html">Profile</a></li>
                </ul>
              </nav>
            </div>
           

          </div>
        
      </div>
      <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div> 
            </div>
        )
    }
}

export default Header
