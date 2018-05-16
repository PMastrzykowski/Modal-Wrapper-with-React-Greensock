import React, {Component} from 'react';
import animateModal from './animations/modalAnimations';
import CloseIcon from './close';

class Modal extends Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.resize = this.resize.bind(this);
}
componentDidMount(){
    this.resize();
    if(this._background && this._modal && this._content && this._close)
    animateModal.show(this._background, this._modal, this._content, this._close);
    this.setState({
        isOpen: true
    });
    window.addEventListener('resize',(e) => {
        if(this._modal && this._content){
            animateModal.resize2(this._modal, this._content)
        }
    }, false);
}
componentWillUnmount(){
    window.removeEventListener('resize',(e) => {
        if(this._modal && this._content){
            animateModal.resize2(this._modal, this._content)
        }
    }, false);
}
componentDidUpdate(){
    this.resize();
}
resize(){
    if(this._modal && this._content)
    animateModal.resize(this._modal, this._content);
}
closeModal(){
    if(this._background && this._modal && this._content && this._close){
        animateModal.hide(this._background, this._modal, this._content, this._close, this.props.callback);
    }
}
clickHandler(e){
    e.stopPropagation();
    this.closeModal();
}
changeContent(cb){
    animateModal.changeContent(this._content, cb);
}
  render(){
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { closeModal: this.closeModal, changeContent: this.changeContent }));
    return (
    <div className='content-modal-wrapper'>
        <div ref={e => this._background = e} className='content-modal-background' onClick={this.clickHandler}></div>
        <div ref={e => this._modal = e} className='content-modal-modal'>
            <div ref={e => this._close = e} className='content-modal-close' onClick={this.clickHandler}>
            {this.props.close && <CloseIcon />}
            </div>
            <div ref={e => this._content = e} className='content-modal-content'>
            {childrenWithProps}
            </div>
        </div>
    </div>
    )
  }  
}

export default Modal