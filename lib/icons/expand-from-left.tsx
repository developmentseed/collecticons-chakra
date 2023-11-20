import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandFromLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='expand-from-left'
      d='M16,16L0,16L0,0L16,0L16,16ZM4,2L4,14L14,14L14,2L4,2ZM5.586,5.414L8.172,8L5.586,10.586L7,12L11,8L7,4L5.586,5.414Z'
    />
  </>
));
