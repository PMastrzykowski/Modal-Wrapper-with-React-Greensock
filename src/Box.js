import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {nextBox} from './actions/actions';

class Box extends Component {
    render() {
      return (
        <div className='box' 
        onClick={() => this.props.changeContent(this.props.nextBox)}
        style={{
            'width': this.props.width,
            'height': this.props.height
        }}>
        <span>{this.props.width}x{this.props.height}</span>
        </div>
      );
    };
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
        nextBox
    }, dispatch);
  }
  export default connect(null, mapDispatchToProps)(Box);