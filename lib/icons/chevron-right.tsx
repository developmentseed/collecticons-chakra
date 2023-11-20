import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronRight = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='3.586,1.414 10.172,8 3.586,14.586 5,16 13,8 5,0' />
  </>
));
