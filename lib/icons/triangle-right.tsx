import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='13,8 5,16 5,0' />
  </>
));
