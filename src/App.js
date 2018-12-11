import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAction } from './actions/index';

import logo from './logo.svg';
import './App.css';

import FilterSortTable from './components/filterSortTable';
import { List } from 'immutable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: List(),
      initiated: false,
      filter: '',
    };
  }
  loadData = () => {
    this.props.loadAction().then(data => {
      this.setState({data: data, initiated: true});
    });
  }

  handleFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {
    return (
      <div className="App">
        {!this.state.initiated
          ?
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button
              className="App-link"
              onClick={this.loadData}
              disabled={this.state.initiated}
            >
              Load
            </button>
          </header>
        :
          <div>
            <div className="search-filter">
                <input value={this.state.filter} type="text" name="filter" onChange={this.handleFilter.bind(this)} />
                <button onClick={this.handleFilter.bind(this)}>Search</button>
            </div>
            <FilterSortTable data={this.state.data} filter={this.state.filter} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
    loadAction: () => dispatch(loadAction())
})
 export default connect(mapStateToProps, mapDispatchToProps)(App);
