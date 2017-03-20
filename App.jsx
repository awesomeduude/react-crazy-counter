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
      numBtns: 10,
      isPositive: 1 //1 is true, -1 is false
    }
  }
  handleMultiplyByN = n => {
    this.setState(multiplyBy(n))
  }
  generateNBtns = n => {
    const btns = []

    for(let i=1; i<= n; i++) {
      const multiplier = i*this.state.isPositive
      btns.push(
        <button key={multiplier} onClick={() => {this.handleMultiplyByN(multiplier)} }>
          x{multiplier}
        </button>
      )
    }
    return btns
  }
  reset = () => {
    this.setState({value:10})
  }
  handleInputChange = e => {
    const isPositive = e.target.value >= 0 ? 1 : -1
    this.setState({
      numBtns: Math.abs(e.target.value),
      isPositive
    })
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