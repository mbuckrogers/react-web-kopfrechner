import React, {Component} from 'react';


class NumberView extends Component {
  render() {
    return (
      <span>
          {this.props.numberVal}
      </span>
  );
  }
}

export default NumberView;
