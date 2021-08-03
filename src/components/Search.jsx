import React from "react";
import '../assets/styles/components/Search.scss'

const Search = () => (
  <React.Fragment>
    <section className="main">
      <h2 className="main__title">What do you want to watch?</h2>
      <input className="input" type="text" placeholder="Search..." />
    </section>
  </React.Fragment>
);

export default Search;
