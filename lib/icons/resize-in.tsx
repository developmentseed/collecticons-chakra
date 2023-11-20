import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonResizeIn = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M2,8L8,8L8,14L6,14L6,11.4L1.4,16L-0.014,14.586L4.572,10L2,10L2,8ZM8,2L10,2L10,4.6L14.6,0L16.014,1.414L11.428,6L14,6L14,8L8,8L8,2Z' />
  </>
));
