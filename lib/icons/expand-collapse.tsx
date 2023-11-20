import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonExpandCollapse = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path
      id='expand-collapse'
      d='M4.414,15.414L8,11.828L11.586,15.414L13,14L8,9L3,14L4.414,15.414ZM11.586,0.586L8,4.172L4.414,0.586L3,2L8,7L13,2L11.586,0.586Z'
    />
  </>
));
