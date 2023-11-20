import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandFromRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='expand-from-right'
      d='M0,0L16,0L16,16L0,16L0,0ZM12,14L12,2L2,2L2,14L12,14ZM10.414,10.586L7.828,8L10.414,5.414L9,4L5,8L9,12L10.414,10.586Z'
    />
  </>
));
