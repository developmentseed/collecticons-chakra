import React from 'react';

import { createCollecticon } from '../collecticon-creator';

export const CollecticonArrowDownLeft = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <path d='M12,12L5.414,12L15.021,2.393L13.607,0.979L4,10.586L4,4L2,4L2,14L12,14L12,12Z' />
  </>
));
