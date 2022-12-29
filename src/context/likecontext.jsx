import React from 'react';

const LikeContext = React.createContext({
    onLike : () => {},
    statuslike : Boolean
})

export default LikeContext