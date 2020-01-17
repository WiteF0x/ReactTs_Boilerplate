import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch} from 'redux';
import * as actions from '../../actions';
import '../../styles/App.css';

interface IProps extends RouteComponentProps<any> {
  count: number;
  setCount: (number: number) => any;
}

class App extends Component<IProps> {

  increment = () => this.props.setCount(this.props.count + 1);

  decrement = () => this.props.setCount(this.props.count - 1)

  public render() {
    return (
      <div className="App">
        <img className="logo" src={require('../../assets/top-logo.jpg')} />
        <div className="Top">
          <text className="title">Boilerplate</text>
        </div>

        <div className="Content">
          <button className="myButton" onClick={this.decrement}>
            -
          </button>

          <span>
            {this.props.count}
          </span>
          
          <button className="myButton" onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  count: store.countStore.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCount: (number: number) => dispatch(actions.setCountAction(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
