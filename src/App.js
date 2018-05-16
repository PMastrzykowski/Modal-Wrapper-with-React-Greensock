import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleModal} from './actions/actions';
import Modal from './Modal';
import Box from './Box';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            boxes: [
                {width: 120, height: 300},
                {width: 300, height: 60},
                {width: 80, height: 200},
                {width: 90, height: 350},
                {width: 100, height: 60},
            ],
        }
    }
    render() {
        let boxIndex = this.props.modal.boxIndex;
      return (
        <div>
        <button onClick={this.props.toggleModal}>Show Modal</button>
      {this.props.modal.isOpen? 
        <Modal callback={this.props.toggleModal} close>
        <Box height={this.state.boxes[boxIndex].height} width={this.state.boxes[boxIndex].width}/>
        </Modal> : null}
      </div>
      );
    };
  }
const mapStateToProps = (state) => {
    return{
        modal: state.modal
    }
  }
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleModal
    }, dispatch);
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);