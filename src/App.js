import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineNum: 1
    };
  }

  enumerate = () => {
    let nums = []
    for(var i = 0; i < this.state.lineNum; i++){
      nums.push(<span key={i}>{i + 1}</span>)
    }
    return nums
  }


  render() {
    return (
      <div className="App">
      <div className="editor">
        <div className="gutter">
        {this.enumerate()}
        </div>
          <div contentEditable className="textfield" onInput={e => {
            this.setState({lineNum: e.target.childElementCount + 1})
          }}></div>
      </div>
      </div>
    );
  }
}

export default App;
