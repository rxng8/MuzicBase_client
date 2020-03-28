import React, { Component } from 'react'

import Card from './Card';
import '../App.css';
import '../assets/css/aos.css';
import hero_bg from '../assets/images/hero_bg_3.jpg';

import $ from 'jquery';

import AOS from 'aos';

// import { cap } from '../assets/js/circleaudioplayer.js'

class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
        AOS.init();
        this.filterList.bind(this);

        
        
    }

    componentDidMount () {
        $("#inpt_search").on('focus', function () {
            $(this).parent('label').addClass('active');
        });
        
        $("#inpt_search").on('blur', function () {
            if($(this).val().length == 0)
                $(this).parent('label').removeClass('active');
        });
    }

    filterList = () => {
        console.log("get here");
    }

    render() {
        return (
            <div className = "no-pad">
                <div class="site-blocks-cover overlay" style={{backgroundImage: `url(${hero_bg})`}} data-aos="fade" data-stellar-background-ratio="0.5" data-aos="fade">
                    <div class="container">
                        
                        <div class="column align-items-center justify-content-center">{/* justify-content-center */}
                            <div class="col-md-7 text-center search-region" data-aos="fade-up" data-aos-delay="400">
                                
                                {/* <form className = "">
                                    <input type = "text" placeholder = "Any songs, genres, or keywords" onChange = {this.filterList}/>

                                </form> */}
                                    <label class="search" for="inpt_search">
                                        <input id="inpt_search" type="text" />
                                    </label>
                                    <p>Search any song, genre, or keyword</p>
                                {/* <h1>Listen &mdash; On-Air Now</h1>
                                <p class="mb-4"><span class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p> */}

                                {/* <div id="playerContainer"></div> */}
                                
                                
                            </div>

                            <div style = {{backgroundColor: "white" , height : 3, width: 1000}} data-aos="fade-up" data-aos-delay="500"></div>

                            <div data-aos="fade-up" data-aos-delay="500">
                                <h1>Your collection</h1>
                                
                            </div>

                            <div class="main-overview" data-aos="fade-up" data-aos-delay="600">
  <div class="overviewcard" >
    <div class="overviewcard__icon">Overview</div>
    <div class="overviewcard__info">Card</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Overview</div>
    <div class="overviewcard__info">Card</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Overview</div>
    <div class="overviewcard__info">Card</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Overview</div>
    <div class="overviewcard__info">Card</div>
  </div>
</div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage
