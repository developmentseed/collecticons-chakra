import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonResizeOut = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M1.986,12.6L6.586,8L8,9.414L3.414,14L5.986,14L5.986,16L1.986,16L-0.014,16L-0.014,10L1.986,10L1.986,12.6ZM12.586,2L10.014,2L10.014,0L16.014,0L16.014,6L14.014,6L14.014,3.4L9.414,8L8,6.586L12.586,2Z' />
  </>
));
