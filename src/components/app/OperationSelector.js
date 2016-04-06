import React, { Component, PropTypes } from 'react';
import {Operations} from './GameStore'


class OperationSelector extends Component {

  constructor(props) {
    super(props)
    this.handleSelect = this.props.onHandleSelect
  }

  render() {
    return(
      <div className="w3-col s4">
          <select className="w3-select w3-blue-grey w3-border-white"
              value={this.props.selectedOperation}
              onChange={this.handleSelect}
              name="options">
              <option value="0">* Multiply</option>
              <option value="1">/ Divide</option>
              <option value="2">+ Addition</option>
              <option value="3">- Subtraction</option>
          </select>
      </div>
    )
  }
}

export default OperationSelector
