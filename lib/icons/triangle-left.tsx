import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='3,8 11,0 11,16' />
  </>
));
