'use client';

import { useState } from 'react';

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>{liked ? 'YES' : 'NO'}</button>
  );
};

export default FavoriteButton;
