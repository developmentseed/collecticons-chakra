import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleDown = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='8,13 0,5 16,5' />
  </>
));
