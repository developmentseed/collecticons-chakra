import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleUp = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='8,3 16,11 0,11' />
  </>
));
