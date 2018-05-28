import React from 'react'
import { connect } from 'react-redux'
import { fetchDataAction } from './actions'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // Your API url
            url: 'https://randomuser.me/api/?results=5'
        }

        this.get_items = this.get_items.bind(this)
    }

    get_items() {
        this.props.fetchData(this.state.url)
    }

    render() {
        return(
            <div>
                <h3>RactJS + Redux (Async)</h3>
                <p>This is a simple example to implement Async Reactjs and Redux requests with redux-thunk</p>
                <br />
                <strong style={{ display: this.props.loading ? 'block' : 'none' }}>Loading ...</strong>
                <ul>
                    {
                        this.props.items.map((item) => (
                            <li>{item.name.first} {item.name.last}</li>
                        ))
                    }
                </ul>
                <br />
                <button onClick={this.get_items}>Load Items</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer,
        items: state.itemsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(fetchDataAction(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
