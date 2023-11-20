import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonHouse = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='0,6 0,16 6,16 6,10 10,10 10,16 16,16 16,6 8,0' />
  </>
));
