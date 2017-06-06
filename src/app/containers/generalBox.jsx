import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add } from '../actions/addAction';

import './general-box.scss';

class Box extends Component{

  render(){
    console.log(this);
    const text = this.props.BoxState;

    const wrappedText = text.map((elem,index) => {
      return (
        <div className='box__card' id={index} key={index}>
          <strong><span>{index + '. '}</span> {elem}</strong>
        </div>
      )
    })
    return (
      <div className='box'>
        <h1 className='box__title'>NOTE TABLE</h1><br/>
        {wrappedText}
        <div className='box__btn'>
          <textarea placeholder='type here...' ref={(textarea) => {this.textarea = textarea}}></textarea><br/>
          <button className='' onClick={() => {this.props.add(this.textarea.value)}}>ADD NOTE</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    BoxState: state.addReducer,
    error: state.errorReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    add
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Box);
