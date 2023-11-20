import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronUp = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='1.414,12.414 8,5.828 14.586,12.414 16,11 8,3 0,11' />
  </>
));
