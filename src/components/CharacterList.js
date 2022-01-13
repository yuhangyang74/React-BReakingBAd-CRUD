import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = ({ value }) => {
  // console.log(value);

  if (!value) {
    return <h1>Loading...</h1>;
  }

  const renderList = value.map((item) => {
    // console.log(item.char_id);
    return <CharacterCard value={item} key={item.char_id} />;
  });

  return (
    <div className="main">
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default CharacterList;
