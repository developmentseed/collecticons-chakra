import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleDownSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='8,11 3,6 13,6' />
  </>
));
