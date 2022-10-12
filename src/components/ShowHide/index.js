// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirst = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLast = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName} = this.state
    const {isLastName} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="title">Show/Hide</h1>

          <div className="container">
            <div className="btn-container1">
              <button className="button" type="button" onClick={this.onFirst}>
                Show/Hide Firstname
              </button>
              {isFirstName && (
                <div className="name-container">
                  <p className="name">Joe</p>
                </div>
              )}
            </div>
            <div className="btn-container">
              <button className="button" type="button" onClick={this.onLast}>
                Show/Hide Lastname
              </button>
              {isLastName && (
                <div className="name-container">
                  <p className="name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
