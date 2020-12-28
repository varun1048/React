import React from "react"
import State from "./State"
export default class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.state = {isDoing: true};
  
      this.handleClick = this.handleClick.bind(this);
      this.do = this.do.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    do(){
        this.setState(inner => ({
            isDoing : !inner.isDoing
        }))
    }
  
    render() {
      return (
          <React.Fragment>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ?  <State /> :'click to show time' }
            </button>

            <button onClick={this.do}>
                {this.state.isDoing ? 'varun on ' : "varun of"}
            </button>
        </React.Fragment>
      );
    }
}