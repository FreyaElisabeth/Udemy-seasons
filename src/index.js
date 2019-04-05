import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
  state = {}

  render() {
    return <div>{this.renderContent()}</div>
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} month={this.state.month} />
    }
    return <Loader message="Bitte geben Sie Ihren Standort frei." />
  }

  componentDidMount() {
    this.getLocation()
    this.getMonth()
  }

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  getMonth() {
    const month = new Date().getMonth()
    this.setState({ month: month })
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
