import React from "react";
import logo from "./logo.svg";
import abrar from "./abrar.png";
import "./App.css";
import { connect } from "react-redux";
import rotateAction from "./actions/rotateAction";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img
              src={logo}
              className={
                "App-logo-one" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />

            <img
              src={abrar}
              className={
                "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />

            <img
              src={logo}
              className={
                "App-logo-two" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />

            <img
              src={logo}
              className={
                "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />

            <img
              src={logo}
              className={
                "App-logo" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />

            <img
              src={abrar}
              className={
                "App-logo-two" + (this.props.rotating ? "" : " App-logo-paused")
              }
              alt="logo"
            />
          </div>
          <p onClick={() => this.props.rotateAction(!this.props.rotating)}>
            Click me to start and stop
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
