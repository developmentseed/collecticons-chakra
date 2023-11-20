import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronUpSmall = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='3.414,11.414 8,6.828 12.586,11.414 14,10 8,4 2,10' />
  </>
));
