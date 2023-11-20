import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonShrinkToLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='shrink-to-left'
      d='M16,16L0,16L0,0L16,0L16,16ZM4,2L4,14L14,14L14,2L4,2ZM10.414,10.586L7.828,8L10.414,5.414L9,4L5,8L9,12L10.414,10.586Z'
    />
  </>
));
