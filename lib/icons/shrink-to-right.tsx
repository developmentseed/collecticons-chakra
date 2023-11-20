import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonShrinkToRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='shrink-to-right'
      d='M0,0L16,0L16,16L0,16L0,0ZM12,14L12,2L2,2L2,14L12,14ZM5.586,5.414L8.172,8L5.586,10.586L7,12L11,8L7,4L5.586,5.414Z'
    />
  </>
));
