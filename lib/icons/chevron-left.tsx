import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonChevronLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <polygon points='12.414,14.586 5.828,8 12.414,1.414 11,0 3,8 11,16 ' />
  </>
));
