import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonBold = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='bold'
      d='M9,1l-6,0l-0,14l6,0c2.208,0 4,-1.792 4,-4c0,-1.194 -0.524,-2.267 -1.355,-3c0.831,-0.733 1.355,-1.806 1.355,-3c-0,-2.208 -1.792,-4 -4,-4Zm-1,8c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Zm0,-6c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Z'
    />
  </>
));
