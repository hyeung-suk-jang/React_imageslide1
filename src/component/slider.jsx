import React, { Component } from 'react';
import details from './details'
import './slider.css';

class Slider extends Component {
  state = {
    phones: details.Phones,
    phoneIndex: 0
  }

  prev = ()=> {
    // console.log("click");
    this.setState(initialState => {
      return {
        phoneIndex: initialState.phoneIndex - 1
      };
    });
  }

  next = ()=> {
    this.setState(initialState => {
      return {
        phoneIndex: initialState.phoneIndex + 1
      };
    });
  }

  render() {
    const {phoneIndex, phones} = this.state;
    const phoneStyle = {
      transform: `translateX(-${phoneIndex * (100 / phones.length)}%)`
    };
    return (
      <>
      <h1>{this.state.phoneIndex}</h1>
      <div className="slider">
        <div className='container'>
          <div className="phoneFlex" style={phoneStyle}>
          {this.state.phones.map(phone => 
              <div className="phoneSlide" key={phone.index}>
                <img src={phone.url} alt=" Cell phone"/>
              </div>
            )}     
          </div>
        </div>
        <button className="btnLeft btnStyle" onClick={this.prev} disabled= {phoneIndex === 0}>Prev</button>
        <button className="btnRight btnStyle" onClick={this.next} disabled= {phoneIndex===phones.length-1}>next</button>
        <i className="fa fa-backward btnLeft" onClick={this.prev} disabled={phoneIndex === 0}></i>
        <i  onClick={this.next} disabled={phoneIndex===phones.length-1} className="fa fa-forward btnRight" ></i>
      </div>
      </>
    );
  }
 }      
export default Slider;