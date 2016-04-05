import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom'
import styles from './styles.scss';

var divStyle = {
  background: 'transparent',
  border: 'none'
 }


class ResultComp extends Component {

    constructor(props) {
      super(props)
      this.handleChange = props.onChange
      this.handleSubmit = props.onSubmit

    }


    handleResize() {
      this.resize(this.refs.numberInput)
    }

    resize(domElement) {
      if(domElement) {
        domElement.focus()
      } else {
      }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this));
      this.resize(this.refs.numberInput)
    }

    onEitherFocusOrGoInAndroid(e) {
      if(e.charCode == 13 || e.type == 'focus') {
        this.refs.formi.dispatchEvent(new Event("submit"));
      }
    }

    render() {
      return (
        <div>
            <form ref='formi' onSubmit={this.handleSubmit}>
                <input className='w3-input w3-col s6  w3-center'
                    type="number"
                    value={this.props.answer}
                    placeholder='Enter a number'
                    onChange={this.handleChange}
                    onKeyPress={this.onEitherFocusOrGoInAndroid.bind(this)}
                    ref='numberInput'
                />
                <input type="text" style={divStyle} onFocus={this.onEitherFocusOrGoInAndroid.bind(this)}/>
            </form>
        </div>
      );
    }
  }

  ResultComp.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  }

export default ResultComp
