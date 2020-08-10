import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

 class App extends Component {

  componentDidMount(){
    this.props.dispatch(actions.moviesList())
  }
  render() {
    
    return (
      <div>
        {
          this.props.movies ?
          this.props.movies.map((item)=>(
            <div key={item.id}>
              {item.name}

            </div>
          ))
          : null
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    
    movies: state.movies
  }
}

export default connect(mapStateToProps)(App);
