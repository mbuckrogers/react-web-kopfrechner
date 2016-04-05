import React, {Component} from 'react';


class NumberView extends Component {
  render() {
    return (
      <p>
        {this.props.numberVal}
      </p>
  );
  }
}

export default NumberView;
