import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHeading = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='heading'
      d='M11,8l-6,0l0,-7l-2,0l0,14l2,0l0,-5l6,0l0,5l2,0l0,-14l-2,0l0,7Z'
    />
  </>
));
