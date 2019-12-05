import React from 'react';
import { connect } from 'react-redux';
import { loadingAction } from './Redux/Actions/Loading';
import { getUsersListAction } from './Redux/Actions/Users';

class App extends React.Component {
  getItems() {
    try {
      this.props.dispatch(loadingAction(true));
      fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => {
        this.props.dispatch(getUsersListAction(data.results));
        this.props.dispatch(loadingAction(false));
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <div>
        <h3>RactJS + Redux (Async)</h3>
        <p>This is a simple example to implement Async Reactjs and Redux requests with redux-thunk</p>
        <br/>
        <strong style={{ display: this.props.loading ? 'block' : 'none' }}>Loading ...</strong>
        <ul>
        {
          this.props.list.map((item, index) => (
            <li key={index}>{item.name.first} {item.name.last}</li>
          ))
        }
        </ul>
        <br/>
        <button onClick={this.getItems.bind(this)}>Load Items</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    list: state.users.list
  }
}

export default connect(mapStateToProps)(App);
