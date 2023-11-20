import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonTriangleLeftSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='5,8 10,3 10,13' />
  </>
));
