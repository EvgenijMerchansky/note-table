import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add, del } from '../actions/addAction';

import './general-box.scss';

class Box extends Component{

  render(){
    //
    // const { name: username1 = 'sanya' ,nextName: username2 = 'serega'} = {
    //   // name: 'igor',
    //   // nextName: 'vasya'
    // }
    // const [val1 = 20, , , , , ,val2 = 25] = [14,15,16,17,18,19,20];
    // console.log(val1,val2);
    //
    // const func = (a,...args) => {
    //   console.log(a,args);
    // }
    // func(12,34,45,12,34);
    //
    // const arr = [1,2,3];
    // const arr2 = [4,5,6];
    // arr.push(...arr2);
    // console.log(arr);
    //
    // console.log(username1,username2);
    //
    console.log(this);
    const text = this.props.BoxState;

    const wrappedText = text.map((elem,index) => {
      return (
        <div className='box__card' id={index} key={index}>
          <strong key={index}><span>{index + '. '}</span>{elem.value}</strong>
          <button className='box__card-delete' onClick={() => {this.props.del(elem.id)}}>delete</button>
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
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    add,
    del
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Box);
