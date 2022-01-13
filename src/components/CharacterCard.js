import React from 'react';
import './CharacterCards.css';
// import { Link } from 'react-router-dom';

const CharacterCard = ({ value }) => {
  const {
    name,
    birthday,
    img,
    occupation,
    status,
    appearance,
    nickname,
    portrayed,
  } = value;
  // return <div id={value.char_id}>card{value.char_id}</div>;
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src="img" />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">{birthday}</span>
          </div>
          <div className="description">
            <span>Ocup: </span>
            {occupation[0]}
          </div>
          <div className="description center">{portrayed}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            Status: {status}
          </a>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Update</div>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
