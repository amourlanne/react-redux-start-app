import React, { Component } from 'react';
import './style.scss';
import {connect} from "react-redux";
import {themeActions} from "../../redux/actions";

class Welcome extends Component {

  render() {
    const { filePath, isReact, setReactTheme, setReduxTheme } = this.props;

    return (
      <div>
        <div onClick={() => isReact ? setReduxTheme() : setReactTheme()}>
          <img src={filePath} className="App-logo spin-right" alt="logo" />
        </div>
        <h2>
           Welcome to React Redux App
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isReact, filePath } = state.theme;

  return {
    isReact: isReact,
    filePath: filePath
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setReactTheme: () => dispatch(themeActions.setReactTheme()),
    setReduxTheme: () => dispatch(themeActions.setReduxTheme())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
