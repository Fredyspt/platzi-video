import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import NotFound from './NotFound';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss'

const Player = (props) => {
  // Looks for a parameter that matches 'id' variable name in the URL
  const { id } = props.match.params;
  const isPlaying = Object.keys(props.playing).length > 0;

  // Renders synchronously
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return isPlaying 
  ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>

      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>Back</button>
      </div>
    </div>
    )
  : <NotFound />
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);