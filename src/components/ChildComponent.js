import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
        <div>
          <button type="submit" onClick={this.props.onClick}>Submit</button>
        </div>
    );
  }
}