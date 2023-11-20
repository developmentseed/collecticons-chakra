import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleUpSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='8,5 13,10 3,10' />
  </>
));
