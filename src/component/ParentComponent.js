import React from 'react';
import HotelComponent from './HotelComponent';
export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false
    };
  }
  _start(){
    this.setState({
      isStart: true
    })
  }
  _end(){
    this.setState({
      isStart: false
    })
  }
  render() {
      return  (
        <div>
            <HotelComponent />
            <button onClick={this._start.bind(this)}>start</button>
            <button onClick={this._end.bind(this)}>end</button>
            <div>{this.state.isStart}</div>
        </div>

      );
  }
}



