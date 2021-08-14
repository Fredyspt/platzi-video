import React from "react";
import { connect } from 'react-redux';

import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = ({ myList = [], trends = [], originals = [], searchResults = [] }) => {
  return (
    <React.Fragment>
      <Search />

      {searchResults.length > 0 
        ? <Categories title="Search results">
            <Carousel>
              {searchResults.map(item => (
                <CarouselItem
                  key={item.id}
                  // Pass the rest of the item as props
                  {...item}
                />
              ))
              }
            </Carousel>
          </Categories>
        : <React.Fragment>
            {myList.length > 0 && (
              <Categories title="My list">
                <Carousel>
                  {myList.map((item) => (
                    <CarouselItem 
                      key={item.id} 
                      {...item}
                      isInList 
                    />
                  ))}
                </Carousel>
              </Categories>
            )}

            <Categories title="Trending">
              <Carousel>
                {trends.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>

            <Categories title="Platzi Originals">
              <Carousel>
                {originals.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          </React.Fragment>
      }
    </React.Fragment>
  );
};

// mapStateToProps is connected to the Store, in which our state is,
// it doesn't modify the state data in the store, it returns a new 
// modified state to be used by this component.
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResults: state.searchResults,
  };
};

// export default connect(props, actions)(Home);
// Connects the component to the provider, so that it 
// can access the store data, and retrieve in a new object the
// props that it needs. Since there are no actions in this component
// second parameter is null
export default connect(mapStateToProps, null)(Home);

