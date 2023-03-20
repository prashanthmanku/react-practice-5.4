// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNo = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNo}))
  }

  render() {
    const {count} = this.state
    const typeOfNo = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="countHeading">Count {count}</h1>
          <p className="count-type">Count is {typeOfNo}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="no-between">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
