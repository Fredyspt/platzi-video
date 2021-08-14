import React from "react";
import { connect } from 'react-redux';

import { searchItem } from '../actions/index'

import '../assets/styles/components/Search.scss'

const Search = (props) => {
  const handleInput = (event) => {
    props.searchItem(event.target.value)
  }

  return (
    <React.Fragment>
      <section className="main">
        <h2 className="main__title">What do you want to watch?</h2>
        <input 
          className="input" 
          type="text" 
          placeholder="Search..." 
          onChange={handleInput}  
        />
      </section>
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  searchItem,
}

export default connect(null, mapDispatchToProps)(Search);
