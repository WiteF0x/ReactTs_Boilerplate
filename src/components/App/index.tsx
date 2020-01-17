import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch} from 'redux';
import * as actions from '../../actions';
import { ISetCount } from '../../actions/count/types';
import Content from '../../containers/Home/Content';
import Header from '../../containers/Home/Header';
import '../../styles/App.scss';

interface IProps extends RouteComponentProps<any> {
  count: number;
  setCount: ({ count }: ISetCount) => void;
}

class App extends Component<IProps> {

  increment = () => this.props.setCount({ count: this.props.count + 1 });

  decrement = () => this.props.setCount({ count: this.props.count - 1 })

  public render() {
    const { count } = this.props;

    return (
      <div className="App">
        <img src={require('../../assets/top-logo.jpg')} />
        <Header title="Boilerplate"/>
        <Content
          count={count}
          increment={this.increment}
          decrement={this.decrement}
        />

      </div>
    )
  }
}

const mapStateToProps = (store: any) => ({
  count: store.countStore.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCount: ({ count }: ISetCount) => dispatch(actions.setCountAction({ count })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
