import React, { Component } from 'react'

function multiplyBy(multiplier) {
  return function update(state) {
    return {
      value: state.value * multiplier
    }
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 10,
      numBtns: 10
    }
  }
  handleMultiplyByN = (n) => {
    this.setState(multiplyBy(n))
  }
  generateNBtns = n => {
    const btns = []
    for(let i=0; i<= n; i++) {
      btns.push(<button key={i} onClick={() => {this.handleMultiplyByN(i)}}>x{i}</button>)
    }
    return btns
  }
  reset = () => {
    this.setState({value:10})
  }
  handleInputChange = e => {
    this.setState({numBtns: Math.abs(e.target.value)})
  }
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        {this.generateNBtns(this.state.numBtns)}
        <button onClick={this.reset}>Reset</button>
        <input onChange={this.handleInputChange} placeholder="Enter a number here..."/>
      </div>
    )
  }
}

export default  App