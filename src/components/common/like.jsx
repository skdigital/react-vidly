import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Input: liked: boolean
// Output: onClick - event

const Like = ({ onClick, liked }) => {
  return (
    <div>
      <FontAwesomeIcon
        onClick={onClick}
        icon="heart"
        color={liked ? ' #ea267e' : '#d2d4d8'}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Like;
