import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonPilcrow = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M8,14L6,14L6,10C3.792,10 2,8.208 2,6C2,3.823 3.742,2.051 6,2L14,2L14,4L12,4L12,14L10,14L10,4L8,4L8,14Z' />
  </>
));
